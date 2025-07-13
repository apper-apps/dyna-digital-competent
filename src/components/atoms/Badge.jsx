import React from "react";
import { cn } from "@/utils/cn";

const Badge = React.forwardRef(({ 
  className, 
  variant = "default", 
  children, 
  ...props 
}, ref) => {
  const variants = {
    default: "bg-surface-800 text-surface-200 border-surface-700",
    primary: "bg-primary-600/20 text-primary-300 border-primary-600/30",
    success: "bg-success-600/20 text-success-300 border-success-600/30",
    warning: "bg-yellow-600/20 text-yellow-300 border-yellow-600/30",
    error: "bg-red-600/20 text-red-300 border-red-600/30"
  };

  return (
    <span
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
});

Badge.displayName = "Badge";

export default Badge;