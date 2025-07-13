import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ApperIcon from "@/components/ApperIcon";
import Card from "@/components/atoms/Card";

const CategoryCard = ({ category, index = 0 }) => {
  const getCategoryIcon = (categoryName) => {
    const iconMap = {
      "AI Automation": "Zap",
      "Business Growth": "TrendingUp",
      "Creative Tools": "Palette",
      "Development": "Code",
      "Health & Wellness": "Heart",
      "Finance": "DollarSign",
      "Education": "GraduationCap",
      "Personal Lifestyle": "User"
    };
    return iconMap[categoryName] || "Folder";
  };

  const getCategoryGradient = (categoryName) => {
    const gradientMap = {
      "AI Automation": "from-blue-500 to-blue-600",
      "Business Growth": "from-green-500 to-green-600",
      "Creative Tools": "from-purple-500 to-purple-600",
      "Development": "from-orange-500 to-orange-600",
      "Health & Wellness": "from-pink-500 to-pink-600",
      "Finance": "from-yellow-500 to-yellow-600",
      "Education": "from-indigo-500 to-indigo-600",
      "Personal Lifestyle": "from-red-500 to-red-600"
    };
    return gradientMap[categoryName] || "from-gray-500 to-gray-600";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={`/browse?category=${encodeURIComponent(category.name)}`}>
        <Card hoverable className="p-6 text-center group">
          <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${getCategoryGradient(category.name)} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200`}>
            <ApperIcon 
              name={getCategoryIcon(category.name)} 
              size={32} 
              className="text-white" 
            />
          </div>
          <h3 className="font-semibold text-white text-lg mb-2 group-hover:text-primary-400 transition-colors duration-200">
            {category.name}
          </h3>
          <p className="text-surface-400 text-sm mb-3">
            {category.description}
          </p>
          <div className="flex items-center justify-center text-primary-400 text-sm font-medium">
            <span>{category.appCount} apps</span>
            <ApperIcon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </div>
        </Card>
      </Link>
    </motion.div>
  );
};

export default CategoryCard;