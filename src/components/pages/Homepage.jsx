import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import React from "react";
import ApperIcon from "@/components/ApperIcon";
import FeaturedApps from "@/components/organisms/FeaturedApps";
import Button from "@/components/atoms/Button";
import CategoryCard from "@/components/molecules/CategoryCard";
import { categoriesData } from "@/services/mockData/categories";

const Homepage = () => {

  const stats = [
    { label: "AI Applications", value: "500+", icon: "Zap" },
    { label: "Verified Vendors", value: "150+", icon: "Shield" },
    { label: "Happy Users", value: "10K+", icon: "Users" },
    { label: "Categories", value: "8", icon: "Grid3X3" }
  ];
const testimonials = [
    {
      name: "Sarah Chen",
      role: "Product Manager",
      company: "Slack Technologies",
      content: "Navigator helped us discover the perfect automation tools for our workflow. Found amazing productivity apps like Notion, Asana, and Zapier all in one place.",
      avatar: "S"
    },
    {
      name: "Michael Rodriguez", 
      role: "Founder",
      company: "Stripe",
      content: "As a startup, we needed cost-effective solutions. Navigator's marketplace made it easy to find tools like Figma, Linear, and Discord within our budget.",
      avatar: "M"
    },
    {
      name: "Dr. Emily Watson",
      role: "Data Scientist", 
      company: "OpenAI",
      content: "The developer tools section is incredible. Found APIs like GitHub Copilot, Vercel, and Supabase that integrated seamlessly with our systems.",
      avatar: "E"
    }
  ];

  return (
<div className="space-y-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-purple-100/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8"
className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 tracking-tight"
          >
            Discover Amazing{" "}
            <span className="gradient-text">AI Applications</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 mb-4 max-w-4xl mx-auto leading-relaxed font-medium"
          >
            Featuring AI-powered apps like ChatGPT, Midjourney, Notion AI, GitHub Copilot, and hundreds more intelligent tools
          </motion.p>
          
<motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            The premier marketplace connecting you with cutting-edge AI applications. Explore automation, creativity, productivity, and business intelligence tools from industry leaders and innovative startups.
</motion.p>
<motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mt-12"
          >
<Link to="/browse">
              <Button size="xl" className="px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl">
                <ApperIcon name="Search" size={24} className="mr-3" />
                Explore AI Apps
              </Button>
            </Link>
            <Link to="/categories">
              <Button variant="outline" size="xl" className="px-8 py-4 text-lg font-semibold border-2">
                <ApperIcon name="Grid3X3" size={24} className="mr-3" />
                Browse Categories
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
<section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Apps */}
      <FeaturedApps />

      {/* Categories Section */}
<section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore <span className="gradient-text">Categories</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Browse applications by category to find the perfect tools for your specific needs
            </p>
          </div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {categoriesData.slice(0, 8).map((category, index) => (
              <CategoryCard key={category.name} category={category} index={index} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/categories">
              <Button variant="outline" size="lg">
                <ApperIcon name="Grid3X3" size={20} className="mr-2" />
                View All Categories
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
<section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our <span className="gradient-text">Users Say</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Join thousands of satisfied customers who found the perfect tools for their business
            </p>
          </div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-md">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  "{testimonial.content}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
<section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 shadow-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of businesses and individuals discovering innovative solutions. 
              Start your journey today and transform the way you work.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
<Link to="/browse">
                <Button variant="secondary" size="xl" className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 text-lg shadow-lg font-semibold">
                  <ApperIcon name="Search" size={24} className="mr-3" />
                  Explore AI Apps
                </Button>
              </Link>
              <Link to="/categories">
                <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 text-lg font-semibold">
                  <ApperIcon name="Grid3X3" size={24} className="mr-3" />
                  Browse Categories
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;