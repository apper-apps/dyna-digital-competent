import { useState } from "react";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";
import Card from "@/components/atoms/Card";
import Input from "@/components/atoms/Input";

const VendorPage = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const stats = [
    { label: "Active Vendors", value: "150+", icon: "Users" },
    { label: "Apps Published", value: "500+", icon: "Package" },
    { label: "Revenue Generated", value: "$2M+", icon: "DollarSign" },
    { label: "Customer Reach", value: "10K+", icon: "TrendingUp" }
  ];

  const features = [
    {
      icon: "Zap",
      title: "Easy Publishing",
      description: "Upload your app in minutes with our streamlined publishing process"
    },
    {
      icon: "DollarSign", 
      title: "Revenue Sharing",
      description: "Keep 70% of your revenue with transparent, monthly payouts"
    },
    {
      icon: "BarChart3",
      title: "Analytics Dashboard",
      description: "Track downloads, revenue, and user engagement in real-time"
    },
    {
      icon: "Shield",
      title: "Security & Trust",
      description: "Your apps are secured and verified for customer confidence"
    }
  ];

  const successStories = [
    {
      name: "Slack Technologies",
      founder: "Stewart Butterfield",
      revenue: "$12M",
      description: "Slack started as an internal tool and became the world's leading business communication platform.",
      growth: "2,400%"
    },
    {
      name: "Notion Labs",
      founder: "Ivan Zhao", 
      revenue: "$8M",
      description: "Notion revolutionized productivity by combining notes, tasks, and databases in one workspace.",
      growth: "1,800%"
    },
    {
      name: "Figma Inc",
      founder: "Dylan Field",
      revenue: "$15M", 
      description: "Figma transformed design collaboration with real-time multiplayer design tools.",
      growth: "3,200%"
    }
  ];

  const tabs = [
    { id: "overview", label: "Overview", icon: "Home" },
    { id: "getting-started", label: "Getting Started", icon: "Play" },
    { id: "pricing", label: "Pricing", icon: "DollarSign" },
    { id: "resources", label: "Resources", icon: "BookOpen" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl mb-12">
          <div className="text-center px-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Build Your <span className="gradient-text">Business</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              Join companies like Slack, Notion, and Figma. Reach millions of users and grow your business on Navigator marketplace.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <Button size="xl" className="px-8 py-4 text-lg">
                <ApperIcon name="Upload" size={24} className="mr-3" />
                Start Selling Today
              </Button>
              <Button variant="outline" size="xl" className="px-8 py-4 text-lg">
                <ApperIcon name="Play" size={24} className="mr-3" />
                Watch Demo
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white rounded-xl mb-12 shadow-sm">
          <div className="px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Join a Thriving Ecosystem</h2>
              <p className="text-gray-600 text-lg">Be part of a marketplace that's growing every day</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <ApperIcon name={stat.icon} size={32} className="text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 mb-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to <span className="gradient-text">Succeed</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Powerful tools and features designed to help you grow your business
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full bg-white border-gray-200 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-md">
                      <ApperIcon name={feature.icon} size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Success Stories Carousel */}
        <section className="py-16 bg-white rounded-xl mb-12 shadow-sm">
          <div className="px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Success <span className="gradient-text">Stories</span>
              </h2>
              <p className="text-gray-600 text-lg">See how leading companies built their business on our platform</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <motion.div
                  key={story.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className="p-6 h-full bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold">
                        {story.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{story.name}</h4>
                        <p className="text-gray-600 text-sm">{story.founder}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4 text-sm leading-relaxed">{story.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">{story.revenue}</div>
                        <div className="text-xs text-gray-500">Annual Revenue</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{story.growth}</div>
                        <div className="text-xs text-gray-500">Growth Rate</div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tabs Section */}
        <section className="bg-white rounded-xl shadow-sm mb-12">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-4 border-b-2 font-medium text-sm transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600 bg-blue-50'
                      : 'border-transparent text-gray-600 hover:text-blue-600 hover:border-gray-300'
                  }`}
                >
                  <ApperIcon name={tab.icon} size={18} />
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="p-8">
            {activeTab === "overview" && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose Navigator?</h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    Navigator provides the perfect platform for companies like yours to reach millions of potential customers. 
                    With our proven track record and comprehensive support system, you'll have everything needed to succeed.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="p-6 border-green-200 bg-green-50">
                      <h4 className="font-semibold text-green-900 mb-2">Global Reach</h4>
                      <p className="text-green-700 text-sm">Access customers worldwide with our international marketplace</p>
                    </Card>
                    <Card className="p-6 border-blue-200 bg-blue-50">
                      <h4 className="font-semibold text-blue-900 mb-2">Marketing Support</h4>
                      <p className="text-blue-700 text-sm">Get featured in our newsletters and promotional campaigns</p>
                    </Card>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "getting-started" && (
              <div className="space-y-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Getting Started is Easy</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[1, 2, 3].map((step) => (
                    <Card key={step} className="p-6 text-center border-gray-200">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                        {step}
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {step === 1 && "Create Account"}
                        {step === 2 && "Upload Your App"} 
                        {step === 3 && "Start Earning"}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {step === 1 && "Sign up and verify your developer account in minutes"}
                        {step === 2 && "Upload your app with our easy-to-use publishing tools"}
                        {step === 3 && "Start earning revenue from day one with our global audience"}
                      </p>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "pricing" && (
              <div className="space-y-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Simple, Transparent Pricing</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="p-6 border-gray-200">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Free</h4>
                    <div className="text-3xl font-bold text-gray-900 mb-4">$0</div>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center space-x-2">
                        <ApperIcon name="Check" size={16} className="text-green-600" />
                        <span className="text-gray-600 text-sm">List your app for free</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <ApperIcon name="Check" size={16} className="text-green-600" />
                        <span className="text-gray-600 text-sm">Basic analytics</span>
                      </li>
                    </ul>
                  </Card>
                  <Card className="p-6 border-blue-500 ring-2 ring-blue-500/20">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Pro</h4>
                    <div className="text-3xl font-bold text-gray-900 mb-4">30%</div>
                    <p className="text-gray-600 text-sm mb-4">Revenue share</p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center space-x-2">
                        <ApperIcon name="Check" size={16} className="text-green-600" />
                        <span className="text-gray-600 text-sm">Advanced analytics</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <ApperIcon name="Check" size={16} className="text-green-600" />
                        <span className="text-gray-600 text-sm">Marketing support</span>
                      </li>
                    </ul>
                  </Card>
                  <Card className="p-6 border-gray-200">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Enterprise</h4>
                    <div className="text-3xl font-bold text-gray-900 mb-4">Custom</div>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center space-x-2">
                        <ApperIcon name="Check" size={16} className="text-green-600" />
                        <span className="text-gray-600 text-sm">Custom terms</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <ApperIcon name="Check" size={16} className="text-green-600" />
                        <span className="text-gray-600 text-sm">Dedicated support</span>
                      </li>
                    </ul>
                  </Card>
                </div>
              </div>
            )}

            {activeTab === "resources" && (
              <div className="space-y-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Developer Resources</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="p-6 border-gray-200">
                    <ApperIcon name="FileText" size={32} className="text-blue-600 mb-4" />
                    <h4 className="font-semibold text-gray-900 mb-2">Documentation</h4>
                    <p className="text-gray-600 text-sm mb-4">Complete guides and API documentation</p>
                    <Button variant="outline" size="sm">
                      <ApperIcon name="ExternalLink" size={16} className="mr-2" />
                      View Docs
                    </Button>
                  </Card>
                  <Card className="p-6 border-gray-200">
                    <ApperIcon name="Users" size={32} className="text-green-600 mb-4" />
                    <h4 className="font-semibold text-gray-900 mb-2">Community</h4>
                    <p className="text-gray-600 text-sm mb-4">Connect with other developers</p>
                    <Button variant="outline" size="sm">
                      <ApperIcon name="MessageCircle" size={16} className="mr-2" />
                      Join Forum
                    </Button>
                  </Card>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Selling?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of successful vendors already growing their business on Navigator
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button variant="secondary" size="xl" className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 text-lg">
              <ApperIcon name="Upload" size={24} className="mr-3" />
              Publish Your App
            </Button>
            <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 text-lg">
              <ApperIcon name="Mail" size={24} className="mr-3" />
              Contact Sales
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default VendorPage;