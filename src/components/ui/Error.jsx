import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";

const Error = ({ 
  title = "Oops! Something went wrong", 
  message = "We encountered an error while loading this content. Please try again.", 
  onRetry = null,
  showRetry = true
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-[400px] text-center px-6"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="w-20 h-20 rounded-full bg-gradient-to-br from-red-500/20 to-red-600/20 flex items-center justify-center mb-6"
      >
        <ApperIcon name="AlertTriangle" size={40} className="text-red-400" />
      </motion.div>
      
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl font-semibold text-white mb-3"
      >
        {title}
      </motion.h3>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-surface-400 max-w-md mb-8 leading-relaxed"
      >
        {message}
      </motion.p>
      
      {showRetry && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button
            onClick={onRetry}
            className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2"
          >
            <ApperIcon name="RefreshCw" size={18} />
            <span>Try Again</span>
          </Button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Error;