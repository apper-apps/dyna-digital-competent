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

  const getAppLogo = (category, appName) => {
    const logoConfig = {
      "AI Automation": {
        gradient: "from-blue-500 via-blue-600 to-indigo-600",
        icon: "Zap",
        shadow: "shadow-blue-500/25"
      },
      "Business Growth": {
        gradient: "from-green-500 via-emerald-600 to-teal-600",
        icon: "TrendingUp",
        shadow: "shadow-green-500/25"
      },
      "Creative Tools": {
        gradient: "from-purple-500 via-violet-600 to-purple-700",
        icon: "Palette",
        shadow: "shadow-purple-500/25"
      },
      "Development": {
        gradient: "from-orange-500 via-amber-600 to-yellow-600",
        icon: "Code",
        shadow: "shadow-orange-500/25"
      },
      "Health & Wellness": {
        gradient: "from-pink-500 via-rose-600 to-red-500",
        icon: "Heart",
        shadow: "shadow-pink-500/25"
      },
      "Finance": {
        gradient: "from-yellow-500 via-amber-600 to-orange-600",
        icon: "DollarSign",
        shadow: "shadow-yellow-500/25"
      },
      "Education": {
        gradient: "from-indigo-500 via-blue-600 to-cyan-600",
        icon: "BookOpen",
        shadow: "shadow-indigo-500/25"
      },
      "Personal Lifestyle": {
        gradient: "from-cyan-500 via-teal-600 to-blue-600",
        icon: "User",
        shadow: "shadow-cyan-500/25"
      }
    };

    const config = logoConfig[category] || logoConfig["AI Automation"];
    
    // Special icons for specific apps
    if (appName?.includes("Content")) config.icon = "Edit3";
    if (appName?.includes("Chat") || appName?.includes("Assistant")) config.icon = "MessageCircle";
    if (appName?.includes("Data") || appName?.includes("Analytics")) config.icon = "BarChart3";
    if (appName?.includes("Code")) config.icon = "Terminal";
    if (appName?.includes("Voice") || appName?.includes("Speech")) config.icon = "Mic";
    if (appName?.includes("Image") || appName?.includes("Photo")) config.icon = "Image";
    if (appName?.includes("Health") || appName?.includes("Wellness")) config.icon = "Activity";
    if (appName?.includes("Finance") || appName?.includes("Money")) config.icon = "CreditCard";
    if (appName?.includes("Learn") || appName?.includes("Education")) config.icon = "GraduationCap";
    if (appName?.includes("Email")) config.icon = "Mail";
    if (appName?.includes("Design")) config.icon = "Brush";
    if (appName?.includes("Productivity") || appName?.includes("Task")) config.icon = "CheckSquare";

    return config;
  };

  const logoConfig = getAppLogo(app.category, app.name);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
    >
<Card hoverable className="group h-[420px] w-full flex flex-col bg-white border border-gray-200/80 shadow-sm hover:shadow-lg hover:border-gray-300/60 transition-all duration-300 overflow-hidden">
        {/* Header Section */}
        <div className="p-3 sm:p-4">
          <div className="flex items-start gap-3 sm:gap-4 mb-2">
            <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${logoConfig.gradient} flex items-center justify-center flex-shrink-0 shadow-lg ${logoConfig.shadow} group-hover:scale-105 transition-transform duration-200`}>
              <ApperIcon name={logoConfig.icon} size={20} className="text-white drop-shadow-sm sm:w-6 sm:h-6" />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2 mb-1">
                <h3 className="font-semibold text-gray-900 text-sm sm:text-base lg:text-lg leading-tight break-words hyphens-auto line-clamp-2 overflow-hidden w-full">
                  {app.name}
                </h3>
                {app.featured && (
                  <Badge variant="primary" className="text-xs flex-shrink-0 ml-2">
                    Featured
                  </Badge>
                )}
              </div>
              <p className="text-gray-600 text-xs sm:text-sm font-medium truncate">
                {app.vendor}
              </p>
            </div>
          </div>

{/* Description */}
          <p className="text-gray-700 text-xs sm:text-sm leading-relaxed line-clamp-2 mb-3 overflow-hidden">
            {app.description}
          </p>
          {/* Rating */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center gap-1">
              <ApperIcon name="Star" size={14} className={`fill-current ${getRatingColor(app.rating)}`} />
              <span className={`text-xs sm:text-sm font-medium ${getRatingColor(app.rating)}`}>
                {app.rating}
              </span>
            </div>
            <span className="text-gray-500 text-xs sm:text-sm">
              ({app.reviewCount} reviews)
            </span>
          </div>
</div>

        {/* Footer Section */}
        <div className="mt-auto p-4 sm:p-5 pt-0 border-t border-gray-100/80">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold text-gray-900">
                {formatPrice(app.pricing[0]?.price || 0)}
              </span>
              {app.pricing.length > 1 && (
                <span className="text-xs text-gray-500">
                  Starting price
                </span>
              )}
            </div>
            
<div className="flex justify-end">
              <Button 
                size="sm"
                onClick={() => onAddToCart(app)}
                className="px-4 py-2 w-full sm:w-auto"
              >
                <ApperIcon name="Plus" size={14} className="mr-1.5" />
                <span className="text-xs sm:text-sm">Add to Cart</span>
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default AppCard;