import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ApperIcon from "@/components/ApperIcon";
import AppGrid from "@/components/organisms/AppGrid";
import Button from "@/components/atoms/Button";
import FilterSidebar from "@/components/molecules/FilterSidebar";
import SearchBar from "@/components/molecules/SearchBar";
import { categoriesData } from "@/services/mockData/categories";
const BrowsePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    categories: [],
    priceRange: "",
    rating: null,
    features: []
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    // Initialize filters from URL params
    const category = searchParams.get("category");
    const search = searchParams.get("search");
    
    if (category) {
      setFilters(prev => ({ ...prev, categories: [category] }));
    }
    
    if (search) {
      setSearchQuery(search);
    }
  }, [searchParams]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    
    // Update URL params
    const params = new URLSearchParams();
    if (newFilters.categories?.length > 0) {
      params.set("category", newFilters.categories[0]);
    }
    if (searchQuery) {
      params.set("search", searchQuery);
    }
    setSearchParams(params);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    const params = new URLSearchParams(searchParams);
    if (query) {
      params.set("search", query);
    } else {
      params.delete("search");
    }
    setSearchParams(params);
  };

  const clearFilters = () => {
    setFilters({
      categories: [],
      priceRange: "",
      rating: null,
      features: []
    });
    setSearchQuery("");
    setSearchParams({});
  };

  const activeFilterCount = 
    (filters.categories?.length || 0) +
    (filters.priceRange ? 1 : 0) +
    (filters.rating ? 1 : 0) +
    (filters.features?.length || 0);

return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
<div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Explore <span className="gradient-text">AI Applications</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">
            Discover innovative AI-powered tools and intelligent solutions from verified vendors. Filter by category, features, and ratings to find the perfect applications for your needs.
          </p>
</div>
        <div className="flex gap-8">
          {/* Desktop Filter Sidebar */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <FilterSidebar
              filters={filters}
              onFilterChange={handleFilterChange}
              onClearFilters={clearFilters}
              categories={categoriesData}
              isOpen={true}
            />
          </div>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden mb-6">
              <Button
                variant="secondary"
                onClick={() => setIsFilterOpen(true)}
                className="flex items-center space-x-2"
              >
                <ApperIcon name="Filter" size={20} />
                <span>Filters</span>
                {activeFilterCount > 0 && (
                  <span className="bg-primary-600 text-white text-xs rounded-full px-2 py-1 ml-2">
                    {activeFilterCount}
                  </span>
                )}
              </Button>
            </div>

{/* Active Filters */}
            {activeFilterCount > 0 && (
              <div className="mb-6 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-gray-900 font-medium">Active Filters ({activeFilterCount})</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {filters.categories?.map(category => (
<span
                      key={category}
                      className="inline-flex items-center space-x-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm border border-blue-200"
                    >
                      <span>{category}</span>
                      <button
onClick={() => handleFilterChange({
                          ...filters,
                          categories: filters.categories.filter(c => c !== category)
                        })}
                        className="hover:text-blue-900"
                      >
                        <ApperIcon name="X" size={14} />
                      </button>
                    </span>
                  ))}
{filters.priceRange && (
                    <span className="inline-flex items-center space-x-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm border border-blue-200">
                      <span>Price: {filters.priceRange}</span>
                      <button
                        onClick={() => handleFilterChange({ ...filters, priceRange: "" })}
className="hover:text-blue-900"
                      >
                        <ApperIcon name="X" size={14} />
                      </button>
                    </span>
                  )}
                  {filters.rating && (
                    <span className="inline-flex items-center space-x-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm border border-blue-200">
                      <span>{filters.rating}+ stars</span>
<button
                        onClick={() => handleFilterChange({ ...filters, rating: null })}
                        className="hover:text-blue-900"
                      >
                        <ApperIcon name="X" size={14} />
                      </button>
                    </span>
                  )}
                  {filters.features?.map(feature => (
<span
                      key={feature}
                      className="inline-flex items-center space-x-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm border border-blue-200"
                    >
                      <span>{feature}</span>
<button
                        onClick={() => handleFilterChange({
                          ...filters,
                          features: filters.features.filter(f => f !== feature)
                        })}
                        className="hover:text-blue-900"
                      >
                        <ApperIcon name="X" size={14} />
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            )}

{/* App Grid */}
            <AppGrid filters={filters} searchQuery={searchQuery} />

            {/* AI Applications Showcase */}
            <div className="mt-16 mb-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Discover the Power of <span className="gradient-text">AI Applications</span>
                </h2>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                  Transform your workflow with intelligent automation, advanced analytics, and cutting-edge AI solutions. 
                  From creative content generation to business process optimization, find the perfect AI-powered tools for every need.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-xl border border-blue-200/50">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                    <ApperIcon name="Zap" size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Automation</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Streamline repetitive tasks with intelligent automation tools that learn and adapt to your workflow patterns.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-violet-100 p-6 rounded-xl border border-purple-200/50">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg flex items-center justify-center mb-4">
                    <ApperIcon name="Brain" size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Analytics</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Unlock insights from your data with advanced AI analytics that reveal patterns and predict trends.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-xl border border-green-200/50">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                    <ApperIcon name="Sparkles" size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Creative AI</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Generate compelling content, designs, and creative assets with state-of-the-art AI creative tools.
                  </p>
                </div>
              </div>

              <div className="text-center mt-12">
                <p className="text-gray-500 text-sm mb-4">
                  Join thousands of professionals already transforming their work with AI
                </p>
                <div className="flex items-center justify-center space-x-8 text-gray-400">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">500+</div>
                    <div className="text-xs">AI Applications</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">50k+</div>
                    <div className="text-xs">Active Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">98%</div>
                    <div className="text-xs">Satisfaction Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Filter Sidebar */}
        <FilterSidebar
          filters={filters}
          onFilterChange={handleFilterChange}
          onClearFilters={clearFilters}
          categories={categoriesData}
          isOpen={isFilterOpen}
          onClose={() => setIsFilterOpen(false)}
        />
      </div>
    </div>
  );
};

export default BrowsePage;