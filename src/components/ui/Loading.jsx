import { motion } from "framer-motion";
import React from "react";

const Loading = ({ type = "cards", count = 6 }) => {
  const skeletonVariants = {
    initial: { opacity: 0.6 },
    animate: { 
      opacity: [0.6, 1, 0.6],
      transition: { 
        duration: 1.5, 
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  if (type === "cards") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: count }).map((_, index) => (
          <motion.div
            key={index}
            variants={skeletonVariants}
            initial="initial"
            animate="animate"
className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-lg shimmer"></div>
              <div className="flex-1">
                <div className="h-4 bg-gray-200 rounded shimmer mb-2"></div>
                <div className="h-3 bg-gray-200 rounded shimmer w-2/3"></div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="h-3 bg-gray-200 rounded shimmer"></div>
              <div className="h-3 bg-gray-200 rounded shimmer w-4/5"></div>
              <div className="h-3 bg-gray-200 rounded shimmer w-3/5"></div>
            </div>
            <div className="flex items-center justify-between mt-6">
              <div className="h-4 bg-gray-200 rounded shimmer w-16"></div>
              <div className="h-8 bg-gray-200 rounded shimmer w-20"></div>
            </div>
          </motion.div>
        ))}
      </div>
    );
  }

  if (type === "detail") {
    return (
      <motion.div
        variants={skeletonVariants}
        initial="initial"
        animate="animate"
        className="space-y-8"
      >
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="w-full h-96 bg-gray-200 rounded-xl shimmer"></div>
          <div className="space-y-6">
            <div className="h-8 bg-gray-200 rounded shimmer"></div>
            <div className="h-4 bg-gray-200 rounded shimmer w-3/4"></div>
            <div className="space-y-2">
              <div className="h-3 bg-gray-200 rounded shimmer"></div>
              <div className="h-3 bg-gray-200 rounded shimmer w-5/6"></div>
              <div className="h-3 bg-gray-200 rounded shimmer w-4/5"></div>
            </div>
            <div className="h-12 bg-gray-200 rounded shimmer w-32"></div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="space-y-4">
{Array.from({ length: count }).map((_, index) => (
        <motion.div
          key={index}
          variants={skeletonVariants}
          initial="initial"
          animate="animate"
className="h-4 bg-gray-200 rounded shimmer"
          style={{ width: `${Math.random() * 40 + 60}%` }}
        />
      ))}
    </div>
  );
};

export default Loading;