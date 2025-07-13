import { motion } from "framer-motion";
import React from "react";
import ApperIcon from "@/components/ApperIcon";
import Badge from "@/components/atoms/Badge";
import Button from "@/components/atoms/Button";

const FilterSidebar = ({ 
  filters, 
  onFilterChange, 
  onClearFilters,
  categories = [],
  isOpen = true,
  onClose
}) => {
  const priceRanges = [
    { label: "Free", value: "free" },
    { label: "$1 - $10", value: "1-10" },
    { label: "$11 - $50", value: "11-50" },
    { label: "$51 - $100", value: "51-100" },
    { label: "$100+", value: "100+" }
  ];

  const ratings = [
    { label: "5 Stars", value: 5 },
    { label: "4+ Stars", value: 4 },
    { label: "3+ Stars", value: 3 },
    { label: "2+ Stars", value: 2 }
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
<motion.div
        initial={{ x: -300 }}
        animate={{ x: isOpen ? 0 : -300 }}
        transition={{ duration: 0.3 }}
        className="fixed lg:static inset-y-0 left-0 z-50 w-80 bg-white border-r border-gray-200 p-6 overflow-y-auto lg:block shadow-lg lg:shadow-none"
      >
        <div className="flex items-center justify-between mb-6 lg:mb-8">
          <h2 className="text-xl font-bold text-gray-900">Filters</h2>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={onClearFilters}
              className="text-gray-600 hover:text-gray-900"
            >
              Clear All
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="lg:hidden text-gray-600 hover:text-gray-900"
            >
              <ApperIcon name="X" size={20} />
            </Button>
          </div>
        </div>

        <div className="space-y-8">
<div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <label key={category.name} className="flex items-center space-x-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={filters.categories?.includes(category.name) || false}
                    onChange={(e) => {
                      const newCategories = e.target.checked 
                        ? [...(filters.categories || []), category.name]
                        : (filters.categories || []).filter(c => c !== category.name);
                      onFilterChange({ ...filters, categories: newCategories });
                    }}
                    className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                    {category.name}
                  </span>
                  <Badge variant="default" className="ml-auto text-xs bg-gray-100 text-gray-700">
                    {category.appCount}
                  </Badge>
                </label>
              ))}
            </div>
          </div>
{/* Price Range */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Price Range</h3>
            <div className="space-y-2">
              {priceRanges.map((range) => (
                <label key={range.value} className="flex items-center space-x-3 cursor-pointer group">
                  <input
                    type="radio"
                    name="priceRange"
                    value={range.value}
                    checked={filters.priceRange === range.value}
                    onChange={(e) => onFilterChange({ ...filters, priceRange: e.target.value })}
                    className="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 focus:ring-2"
                  />
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                    {range.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Rating */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Minimum Rating</h3>
<div className="space-y-2">
              {ratings.map((rating) => (
                <label key={rating.value} className="flex items-center space-x-3 cursor-pointer group">
                  <input
                    type="radio"
                    name="rating"
                    value={rating.value}
                    checked={filters.rating === rating.value}
                    onChange={(e) => onFilterChange({ ...filters, rating: parseInt(e.target.value) })}
                    className="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 focus:ring-2"
                  />
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <ApperIcon
                        key={i}
                        name="Star"
                        size={14}
                        className={`${i < rating.value ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                    & up
                  </span>
                </label>
              ))}
            </div>
          </div>
{/* Features */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Features</h3>
            <div className="space-y-2">
              {["API Available", "Free Trial", "Mobile App", "24/7 Support", "Custom Integration"].map((feature) => (
                <label key={feature} className="flex items-center space-x-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={filters.features?.includes(feature) || false}
                    onChange={(e) => {
                      const newFeatures = e.target.checked 
                        ? [...(filters.features || []), feature]
                        : (filters.features || []).filter(f => f !== feature);
                      onFilterChange({ ...filters, features: newFeatures });
                    }}
                    className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                    {feature}
                  </span>
                </label>
              ))}
            </div>
          </div>
</div>
      </motion.div>
    </>
  );
};
export default FilterSidebar;