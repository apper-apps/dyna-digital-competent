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
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Browse <span className="gradient-text">Super Applications</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            Discover innovative tools and solutions from verified vendors. Filter by category, price, rating, and features to find exactly what you need.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <SearchBar 
            onSearch={handleSearch}
            placeholder="Search applications, vendors, or features..."
            className="max-w-2xl"
          />
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
                  <h3 className="text-gray-900 font-medium">Active Filters</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearFilters}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Clear All
                  </Button>
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