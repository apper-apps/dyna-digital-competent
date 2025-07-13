import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";
import Card from "@/components/atoms/Card";

const GetFundingPage = () => {
  const fundingTypes = [
    {
      title: "Seed Funding",
      description: "Early-stage funding to transform your app idea into reality",
      amount: "$10K - $100K",
      duration: "3-6 months",
      icon: "Sprout",
      gradient: "from-green-500 to-emerald-600",
      features: [
        "Product development support",
        "Market validation assistance",
        "Technical mentorship",
        "Go-to-market strategy"
      ]
    },
    {
      title: "Growth Capital",
      description: "Scale your successful app with strategic investment",
      amount: "$100K - $1M",
      duration: "6-12 months",
      icon: "TrendingUp",
      gradient: "from-blue-500 to-indigo-600",
      features: [
        "User acquisition campaigns",
        "Feature expansion funding",
        "Team scaling support",
        "Partnership opportunities"
      ]
    },
    {
      title: "Strategic Partnership",
      description: "Partner with established companies for mutual growth",
      amount: "$50K - $500K",
      duration: "Ongoing",
      icon: "Handshake",
      gradient: "from-purple-500 to-violet-600",
      features: [
        "Revenue sharing models",
        "Cross-platform integration",
        "Shared marketing resources",
        "Technical collaboration"
      ]
    }
  ];

  const successStories = [
    {
      app: "AI Content Generator",
      funding: "$250K",
      growth: "300% user growth",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop&crop=faces",
      quote: "The funding helped us scale our AI models and reach new markets globally."
    },
    {
      app: "SmartChat Assistant",
      funding: "$150K",
      growth: "200% revenue increase",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=faces",
      quote: "With strategic funding, we transformed from startup to market leader."
    },
    {
      app: "DataViz Pro",
      funding: "$400K",
      growth: "500% enterprise adoption",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=300&fit=crop&crop=faces",
      quote: "The investment enabled us to build enterprise-grade features faster."
    }
  ];

  const requirements = [
    {
      title: "Active App Listing",
      description: "Your app must be listed on our marketplace with positive reviews",
      icon: "CheckCircle"
    },
    {
      title: "Revenue Metrics",
      description: "Demonstrate consistent revenue or strong user engagement",
      icon: "BarChart3"
    },
    {
      title: "Growth Plan",
      description: "Present a clear roadmap for scaling your application",
      icon: "Target"
    },
    {
      title: "Team Commitment",
      description: "Show dedicated team members and technical expertise",
      icon: "Users"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Fund Your <span className="gradient-text">Next Big App</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your innovative app ideas into market-leading solutions with our comprehensive funding programs. Join successful developers who've scaled their applications with our support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-4">
                  <ApperIcon name="Rocket" size={20} className="mr-2" />
                  Apply for Funding
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                  <ApperIcon name="Play" size={20} className="mr-2" />
                  Watch Success Stories
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=400&fit=crop&crop=center"
                  alt="App Development Team"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-64 h-64 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Funding Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your <span className="gradient-text">Funding Path</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer flexible funding options tailored to your app's stage and growth potential
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fundingTypes.map((funding, index) => (
              <motion.div
                key={funding.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${funding.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                    <ApperIcon name={funding.icon} size={28} className="text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{funding.title}</h3>
                  <p className="text-gray-600 mb-4">{funding.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="text-sm text-gray-500">Amount</div>
                      <div className="font-bold text-gray-900">{funding.amount}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Timeline</div>
                      <div className="font-bold text-gray-900">{funding.duration}</div>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {funding.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <ApperIcon name="Check" size={16} className="text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button className="w-full" variant={index === 1 ? "primary" : "outline"}>
                    Learn More
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="gradient-text">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our funding programs have helped developers achieve remarkable growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.app}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={story.image}
                      alt={`${story.app} founder`}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-gray-900 text-lg mb-2">{story.app}</h3>
                    <div className="flex justify-between text-sm text-gray-600 mb-4">
                      <span className="font-medium text-green-600">{story.funding}</span>
                      <span className="font-medium text-blue-600">{story.growth}</span>
                    </div>
                    <blockquote className="text-gray-700 italic">
                      "{story.quote}"
                    </blockquote>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Funding <span className="gradient-text">Requirements</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet these criteria to qualify for our funding programs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {requirements.map((req, index) => (
              <motion.div
                key={req.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <ApperIcon name={req.icon} size={20} className="text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{req.title}</h3>
                  <p className="text-gray-600 text-sm">{req.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Fund Your App's Future?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of successful developers who've transformed their ideas into market-leading applications with our funding support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                <ApperIcon name="FileText" size={20} className="mr-2" />
                Submit Application
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-blue-600">
                <ApperIcon name="Phone" size={20} className="mr-2" />
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GetFundingPage;