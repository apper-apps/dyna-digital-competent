import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useCart } from "@/hooks/useCart";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";
import Error from "@/components/ui/Error";
import Loading from "@/components/ui/Loading";
import { appService } from "@/services/api/appService";

const FeaturedApps = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const { addItem } = useCart();

  useEffect(() => {
    loadFeaturedApps();
  }, []);

  const loadFeaturedApps = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await appService.getFeatured();
      setApps(data);
    } catch (err) {
      setError("Failed to load featured apps");
    } finally {
      setLoading(false);
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % apps.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + apps.length) % apps.length);
  };

  const handleAddToCart = (app) => {
    const price = app.pricing[0]?.price || 0;
    addItem({
      Id: app.Id,
      name: app.name,
      price: price,
      vendor: app.vendor
    });
  };

  if (loading) return <Loading type="cards" count={3} />;
  if (error) return <Error message={error} onRetry={loadFeaturedApps} />;
  if (apps.length === 0) return null;

  const currentApp = apps[currentIndex];

  return (
<section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured <span className="gradient-text">Super Apps</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            From Slack and Notion to Figma and GitHub - discover the tools that power modern teams
          </p>
        </div>

        <div className="relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden"
          >
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-8">
              {/* App Info */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <ApperIcon name="Zap" size={32} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{currentApp.name}</h3>
                    <p className="text-gray-600 font-medium">{currentApp.vendor}</p>
                  </div>
                </div>

                <p className="text-gray-700 text-lg leading-relaxed">
                  {currentApp.description}
                </p>

                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <ApperIcon name="Star" size={20} className="text-yellow-500 fill-current" />
                    <span className="text-gray-900 font-semibold">{currentApp.rating}</span>
                    <span className="text-gray-600">({currentApp.reviewCount} reviews)</span>
                  </div>
                  <div className="text-gray-400">•</div>
                  <span className="text-gray-600 font-medium">{currentApp.category}</span>
                </div>

<div className="flex flex-wrap gap-2">
                  {currentApp.tags.slice(0, 4).map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-4">
                  <div className="text-3xl font-bold text-gray-900">
                    {currentApp.pricing[0]?.price === 0 ? 'Free' : `$${currentApp.pricing[0]?.price}/month`}
                  </div>
                  {currentApp.pricing.length > 1 && (
                    <span className="text-gray-600">Starting price</span>
                  )}
                </div>
                <div className="flex space-x-4">
                  <Link to={`/app/${currentApp.Id}`}>
                    <Button size="lg" className="px-8">
                      <ApperIcon name="Eye" size={20} className="mr-2" />
                      View Details
                    </Button>
                  </Link>
                  <Button 
                    variant="secondary" 
                    size="lg"
                    onClick={() => handleAddToCart(currentApp)}
                  >
                    <ApperIcon name="Plus" size={20} className="mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>

{/* App Screenshot/Image */}
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl flex flex-col items-center justify-center shadow-inner border border-gray-200">
                  <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4 shadow-lg">
                    <ApperIcon name="Zap" size={40} className="text-white" />
                  </div>
                  <h3 className="text-gray-700 font-semibold text-lg">{currentApp.name}</h3>
                  <p className="text-gray-500 text-sm mt-1">Interactive Preview</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent rounded-xl"></div>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <Button
              variant="ghost"
              onClick={prevSlide}
              disabled={apps.length <= 1}
              className="flex items-center space-x-2"
            >
              <ApperIcon name="ChevronLeft" size={20} />
              <span>Previous</span>
            </Button>

<div className="flex space-x-3">
              {apps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 shadow-sm ${
                    index === currentIndex 
                      ? 'bg-blue-500 ring-2 ring-blue-200 scale-110' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="ghost"
              onClick={nextSlide}
              disabled={apps.length <= 1}
              className="flex items-center space-x-2"
            >
              <span>Next</span>
              <ApperIcon name="ChevronRight" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedApps;