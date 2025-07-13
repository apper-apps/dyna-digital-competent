import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";
import Badge from "@/components/atoms/Badge";
import Card from "@/components/atoms/Card";

const AppCard = ({ app, onAddToCart }) => {
  const formatPrice = (price) => {
    if (price === 0) return "Free";
    return `$${price}/month`;
  };

  const getRatingColor = (rating) => {
    if (rating >= 4.5) return "text-success-400";
    if (rating >= 4.0) return "text-yellow-400";
    if (rating >= 3.0) return "text-orange-400";
    return "text-red-400";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
    >
<Card hoverable className="p-6 h-full flex flex-col bg-white border-gray-200 shadow-sm hover:shadow-lg">
        <div className="flex items-start space-x-4 mb-4">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-md">
            <ApperIcon name="Zap" size={24} className="text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-900 text-lg truncate">{app.name}</h3>
            <p className="text-gray-600 text-sm font-medium">{app.vendor}</p>
          </div>
          {app.featured && (
            <Badge variant="primary" className="text-xs">
              Featured
            </Badge>
          )}
        </div>

<p className="text-gray-700 text-sm mb-4 flex-1 line-clamp-3">
          {app.description}
        </p>

        <div className="flex items-center space-x-2 mb-4">
          <div className="flex items-center space-x-1">
            <ApperIcon name="Star" size={16} className={`fill-current ${getRatingColor(app.rating)}`} />
            <span className={`text-sm font-medium ${getRatingColor(app.rating)}`}>
              {app.rating}
            </span>
          </div>
          <span className="text-gray-500 text-sm">
            ({app.reviewCount} reviews)
          </span>
        </div>

        <div className="flex items-center space-x-2 mb-4">
          <Badge variant="default" className="text-xs">
            {app.category}
          </Badge>
          {app.tags.slice(0, 2).map((tag, index) => (
            <Badge key={index} variant="default" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex items-center justify-between">
<div className="flex flex-col">
            <span className="text-lg font-bold text-gray-900">
              {formatPrice(app.pricing[0]?.price || 0)}
            </span>
            {app.pricing.length > 1 && (
              <span className="text-xs text-gray-500">
                Starting price
              </span>
            )}
          </div>
          <div className="flex space-x-2">
            <Link to={`/app/${app.Id}`}>
<Button variant="ghost" size="sm" className="text-gray-600 hover:text-blue-600 hover:bg-blue-50">
                <ApperIcon name="Eye" size={16} className="mr-1" />
                View
              </Button>
            </Link>
            <Button 
              size="sm"
              onClick={() => onAddToCart(app)}
            >
              <ApperIcon name="Plus" size={16} className="mr-1" />
              Add
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default AppCard;