import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import AppGrid from "@/components/organisms/AppGrid";
import Button from "@/components/atoms/Button";
import CategoryCard from "@/components/molecules/CategoryCard";
import { categoriesData } from "@/services/mockData/categories";

const CategoryPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filters, setFilters] = useState({
    categories: [],
    priceRange: "",
    rating: null,
    features: []
  });

  useEffect(() => {
    const category = searchParams.get("category");
    if (category) {
      setSelectedCategory(category);
      setFilters(prev => ({ ...prev, categories: [category] }));
    }
  }, [searchParams]);

  const handleCategorySelect = (categoryName) => {
    setSelectedCategory(categoryName);
    setFilters(prev => ({ ...prev, categories: [categoryName] }));
    
    const params = new URLSearchParams();
    params.set("category", categoryName);
    setSearchParams(params);
  };

  const clearCategory = () => {
    setSelectedCategory("");
    setFilters(prev => ({ ...prev, categories: [] }));
    setSearchParams({});
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore by <span className="gradient-text">Category</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            Discover applications organized by category. From AI automation to creative tools, 
            find the perfect solutions for your specific needs.
          </p>
        </div>

        {/* Categories Grid */}
        <section className="mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoriesData.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => handleCategorySelect(category.name)}
                className="cursor-pointer"
              >
                <div className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                  selectedCategory === category.name
                    ? 'border-blue-500 bg-blue-50 shadow-lg scale-105'
                    : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md'
                }`}>
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${
                    category.name === "AI Automation" ? "from-blue-500 to-blue-600" :
                    category.name === "Business Growth" ? "from-green-500 to-green-600" :
                    category.name === "Creative Tools" ? "from-purple-500 to-purple-600" :
                    category.name === "Development" ? "from-orange-500 to-orange-600" :
                    category.name === "Health & Wellness" ? "from-pink-500 to-pink-600" :
                    category.name === "Finance" ? "from-yellow-500 to-yellow-600" :
                    category.name === "Education" ? "from-indigo-500 to-indigo-600" :
                    "from-red-500 to-red-600"
                  } flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <ApperIcon 
                      name={category.icon} 
                      size={32} 
                      className="text-white" 
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2 text-center">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 text-center">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-center text-blue-600 text-sm font-medium">
                    <span>{category.appCount} apps</span>
                    <ApperIcon name="ArrowRight" size={16} className="ml-2" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Selected Category Apps */}
        {selectedCategory && (
          <section>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {selectedCategory} Applications
                </h2>
                <p className="text-gray-600">
                  Discover innovative {selectedCategory.toLowerCase()} solutions from verified vendors
                </p>
              </div>
              <Button
                variant="outline"
                onClick={clearCategory}
                className="flex items-center space-x-2"
              >
                <ApperIcon name="X" size={16} />
                <span>Clear Filter</span>
              </Button>
            </div>
            
            <AppGrid filters={filters} searchQuery="" />
          </section>
        )}

        {/* All Categories Overview */}
        {!selectedCategory && (
          <section className="mt-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Popular <span className="gradient-text">Applications</span>
              </h2>
              <p className="text-gray-600 text-lg">
                Trending apps across all categories
              </p>
            </div>
            
            <AppGrid filters={filters} searchQuery="" />
          </section>
        )}

        {/* Category Stats */}
        <section className="mt-16 py-16 bg-white rounded-xl shadow-sm">
          <div className="px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Marketplace <span className="gradient-text">Statistics</span>
              </h2>
              <p className="text-gray-600 text-lg">
                Discover the breadth of our application ecosystem
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { label: "Total Categories", value: "8", icon: "Grid3X3" },
                { label: "Total Applications", value: "500+", icon: "Package" },
                { label: "Verified Vendors", value: "150+", icon: "Shield" },
                { label: "Happy Users", value: "10K+", icon: "Users" }
              ].map((stat, index) => (
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
      </div>
    </div>
  );
};

export default CategoryPage;