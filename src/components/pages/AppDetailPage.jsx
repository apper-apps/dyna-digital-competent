import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";
import Badge from "@/components/atoms/Badge";
import Card from "@/components/atoms/Card";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import { appService } from "@/services/api/appService";
import { reviewService } from "@/services/api/reviewService";
import { useCart } from "@/hooks/useCart";
import { toast } from "react-toastify";

const AppDetailPage = () => {
  const { id } = useParams();
  const [app, setApp] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedPlan, setSelectedPlan] = useState(0);
  const [activeTab, setActiveTab] = useState("overview");
  const { addItem } = useCart();

  useEffect(() => {
    loadAppDetails();
  }, [id]);

  const loadAppDetails = async () => {
    try {
      setLoading(true);
      setError("");
      const [appData, reviewsData] = await Promise.all([
        appService.getById(parseInt(id)),
        reviewService.getByAppId(parseInt(id))
      ]);
      setApp(appData);
      setReviews(reviewsData);
    } catch (err) {
      setError("Failed to load application details");
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = () => {
    const selectedPricing = app.pricing[selectedPlan];
    addItem({
      Id: app.Id,
      name: app.name,
      price: selectedPricing.price,
      vendor: app.vendor,
      plan: selectedPricing.name
    });
    toast.success(`${app.name} added to cart!`);
  };

  const getRatingColor = (rating) => {
    if (rating >= 4.5) return "text-success-400";
    if (rating >= 4.0) return "text-yellow-400";
    if (rating >= 3.0) return "text-orange-400";
    return "text-red-400";
  };

  const formatPrice = (price) => {
    if (price === 0) return "Free";
    return `$${price}/month`;
  };

  if (loading) return <Loading type="detail" />;
  if (error) return <Error message={error} onRetry={loadAppDetails} />;
  if (!app) return <Error message="Application not found" showRetry={false} />;

  const tabs = [
    { id: "overview", label: "Overview", icon: "FileText" },
    { id: "features", label: "Features", icon: "List" },
    { id: "pricing", label: "Pricing", icon: "DollarSign" },
    { id: "reviews", label: "Reviews", icon: "Star" }
  ];

  return (
    <div className="min-h-screen bg-surface-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-surface-400">
            <Link to="/" className="hover:text-white transition-colors duration-200">Home</Link>
            <ApperIcon name="ChevronRight" size={16} />
            <Link to="/browse" className="hover:text-white transition-colors duration-200">Browse</Link>
            <ApperIcon name="ChevronRight" size={16} />
            <span className="text-white">{app.name}</span>
          </div>
        </nav>

        {/* App Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12"
        >
          {/* App Info */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center flex-shrink-0">
                <ApperIcon name="Zap" size={40} className="text-white" />
              </div>
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{app.name}</h1>
                <p className="text-surface-400 text-lg mb-3">by {app.vendor}</p>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <ApperIcon
                          key={i}
                          name="Star"
                          size={20}
                          className={`${i < Math.floor(app.rating) ? 'text-yellow-400 fill-current' : 'text-surface-600'}`}
                        />
                      ))}
                    </div>
                    <span className={`font-semibold ${getRatingColor(app.rating)}`}>
                      {app.rating}
                    </span>
                  </div>
                  <span className="text-surface-400">({app.reviewCount} reviews)</span>
                </div>
                <Badge variant="primary" className="mb-4">
                  {app.category}
                </Badge>
              </div>
            </div>

            <p className="text-surface-300 text-lg leading-relaxed">
              {app.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {app.tags.map((tag, index) => (
                <Badge key={index} variant="default">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="flex space-x-4">
              <Button size="lg" onClick={handleAddToCart} className="flex-1 sm:flex-none">
                <ApperIcon name="Plus" size={20} className="mr-2" />
                Add to Cart
              </Button>
              <Button variant="outline" size="lg">
                <ApperIcon name="Heart" size={20} className="mr-2" />
                Save
              </Button>
              <Button variant="ghost" size="lg">
                <ApperIcon name="Share" size={20} className="mr-2" />
                Share
              </Button>
            </div>
          </div>

          {/* App Screenshot/Image */}
          <div className="space-y-4">
            <div className="aspect-video bg-gradient-to-br from-surface-700 to-surface-600 rounded-xl flex items-center justify-center">
              <ApperIcon name="Image" size={80} className="text-surface-500" />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((_, index) => (
                <div key={index} className="aspect-square bg-surface-700 rounded-lg flex items-center justify-center">
                  <ApperIcon name="Image" size={24} className="text-surface-500" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="border-b border-surface-700 mb-8">
          <nav className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'border-primary-500 text-primary-400'
                    : 'border-transparent text-surface-400 hover:text-white hover:border-surface-600'
                }`}
              >
                <ApperIcon name={tab.icon} size={18} />
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-8"
        >
          {activeTab === "overview" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">About this application</h3>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-surface-300 leading-relaxed mb-4">
                      {app.description}
                    </p>
                    <p className="text-surface-300 leading-relaxed mb-4">
                      This powerful AI application offers cutting-edge features designed to streamline your workflow and boost productivity. 
                      With advanced machine learning capabilities and an intuitive interface, it's perfect for both beginners and experts.
                    </p>
                    <p className="text-surface-300 leading-relaxed">
                      Join thousands of satisfied users who have transformed their business processes with this innovative solution. 
                      Experience the future of AI-powered automation today.
                    </p>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {app.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-lg bg-primary-600/20 flex items-center justify-center flex-shrink-0">
                          <ApperIcon name="Check" size={16} className="text-primary-400" />
                        </div>
                        <span className="text-surface-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Vendor Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                        <ApperIcon name="Building" size={20} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white">{app.vendor}</h4>
                        <p className="text-surface-400 text-sm">Verified Vendor</p>
                      </div>
                    </div>
                    <p className="text-surface-300 text-sm">
                      A trusted provider of innovative AI solutions with a track record of delivering high-quality applications.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      View Vendor Profile
                    </Button>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Support & Resources</h3>
                  <div className="space-y-3">
                    <a href="#" className="flex items-center space-x-3 text-surface-300 hover:text-white transition-colors duration-200">
                      <ApperIcon name="FileText" size={16} />
                      <span>Documentation</span>
                    </a>
                    <a href="#" className="flex items-center space-x-3 text-surface-300 hover:text-white transition-colors duration-200">
                      <ApperIcon name="Code" size={16} />
                      <span>API Reference</span>
                    </a>
                    <a href="#" className="flex items-center space-x-3 text-surface-300 hover:text-white transition-colors duration-200">
                      <ApperIcon name="MessageCircle" size={16} />
                      <span>Community Forum</span>
                    </a>
                    <a href="#" className="flex items-center space-x-3 text-surface-300 hover:text-white transition-colors duration-200">
                      <ApperIcon name="Mail" size={16} />
                      <span>Support Email</span>
                    </a>
                  </div>
                </Card>
              </div>
            </div>
          )}

          {activeTab === "features" && (
            <Card className="p-6">
              <h3 className="text-2xl font-semibold text-white mb-6">Features & Capabilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {app.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-surface-700 rounded-lg">
                    <div className="w-10 h-10 rounded-lg bg-primary-600/20 flex items-center justify-center flex-shrink-0">
                      <ApperIcon name="Zap" size={20} className="text-primary-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">{feature}</h4>
                      <p className="text-surface-400 text-sm">
                        Advanced functionality that enhances your workflow and increases productivity.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {activeTab === "pricing" && (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-white mb-4">Choose Your Plan</h3>
                <p className="text-surface-400">Select the plan that best fits your needs</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {app.pricing.map((plan, index) => (
                  <Card key={index} className={`p-6 cursor-pointer transition-all duration-200 ${
                    selectedPlan === index ? 'border-primary-500 ring-2 ring-primary-500/20' : 'hover:border-surface-600'
                  }`} onClick={() => setSelectedPlan(index)}>
                    <div className="text-center">
                      <h4 className="text-xl font-semibold text-white mb-2">{plan.name}</h4>
                      <div className="text-3xl font-bold text-white mb-4">
                        {formatPrice(plan.price)}
                      </div>
                      <div className="space-y-3 mb-6">
                        {plan.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <ApperIcon name="Check" size={16} className="text-success-400" />
                            <span className="text-surface-300 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Button 
                        className={`w-full ${selectedPlan === index ? 'bg-primary-600' : ''}`}
                        variant={selectedPlan === index ? "primary" : "secondary"}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedPlan(index);
                          handleAddToCart();
                        }}
                      >
                        {selectedPlan === index ? 'Selected - Add to Cart' : 'Select Plan'}
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold text-white">Customer Reviews</h3>
                <Button variant="outline">
                  <ApperIcon name="Plus" size={16} className="mr-2" />
                  Write Review
                </Button>
              </div>
              
              {reviews.length === 0 ? (
                <Card className="p-8 text-center">
                  <ApperIcon name="MessageSquare" size={48} className="text-surface-600 mx-auto mb-4" />
                  <h4 className="text-lg font-medium text-white mb-2">No reviews yet</h4>
                  <p className="text-surface-400">Be the first to review this application</p>
                </Card>
              ) : (
                <div className="space-y-4">
                  {reviews.map((review, index) => (
                    <Card key={review.Id} className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-semibold text-sm">
                            {review.userName.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-4 mb-2">
                            <h4 className="font-medium text-white">{review.userName}</h4>
                            <div className="flex items-center space-x-1">
                              {[...Array(5)].map((_, i) => (
                                <ApperIcon
                                  key={i}
                                  name="Star"
                                  size={14}
                                  className={`${i < review.rating ? 'text-yellow-400 fill-current' : 'text-surface-600'}`}
                                />
                              ))}
                            </div>
                            {review.verified && (
                              <Badge variant="success" className="text-xs">
                                Verified Purchase
                              </Badge>
                            )}
                          </div>
                          <p className="text-surface-300 mb-3">{review.comment}</p>
                          <div className="flex items-center space-x-4 text-sm text-surface-400">
                            <span>{new Date(review.createdAt).toLocaleDateString()}</span>
                            <button className="hover:text-white transition-colors duration-200">
                              Helpful ({review.helpful})
                            </button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default AppDetailPage;