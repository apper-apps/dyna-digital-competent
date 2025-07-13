import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";

const Empty = ({ 
  icon = "Search",
  title = "No results found", 
  message = "We couldn't find anything matching your criteria. Try adjusting your search or filters.", 
  actionText = "Clear Filters",
  onAction = null,
  showAction = true
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
className="flex flex-col items-center justify-center min-h-[500px] text-center px-6"
    >
      <motion.div
        initial={{ scale: 0.8, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center mb-8 relative overflow-hidden shadow-lg"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent animate-pulse"></div>
        <ApperIcon name={icon} size={48} className="text-blue-500 relative z-10" />
      </motion.div>
      
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
transition={{ duration: 0.6, delay: 0.2 }}
        className="text-2xl font-bold text-gray-900 mb-4"
      >
        {title}
      </motion.h3>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
transition={{ duration: 0.6, delay: 0.3 }}
        className="text-gray-600 max-w-lg mb-8 leading-relaxed text-lg"
      >
        {message}
      </motion.p>
      
      {showAction && onAction && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
<Button
            onClick={onAction}
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 flex items-center space-x-3 text-lg shadow-lg"
          >
            <ApperIcon name="Filter" size={20} />
            <span>{actionText}</span>
          </Button>
        </motion.div>
      )}
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
className="mt-12 text-gray-500 text-sm"
      >
        <p>Need help? <span className="text-blue-600 hover:text-blue-700 cursor-pointer underline">Contact our support team</span></p>
      </motion.div>
    </motion.div>
  );
};

export default Empty;