import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";
import Badge from "@/components/atoms/Badge";
import CartDropdown from "@/components/molecules/CartDropdown";
import { useCart } from "@/hooks/useCart";

const Header = () => {
  const navigate = useNavigate();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { items, removeItem, clearCart } = useCart();

  const cartItemCount = items.reduce((total, item) => total + item.quantity, 0);

const navigation = [
    { name: "Browse", href: "/browse" },
    { name: "Categories", href: "/categories" },
    { name: "Pricing", href: "/pricing" },
    { name: "Support", href: "/support" }
  ];

return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-40 bg-gradient-to-r from-white/95 via-blue-50/95 to-purple-50/95 backdrop-blur-sm border-b border-gray-200/50 shadow-lg modern-shadow"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover-lift">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 flex items-center justify-center shadow-lg modern-shadow-lg">
              <ApperIcon name="Zap" size={26} className="text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold gradient-text text-shadow">Navigator</h1>
              <p className="text-xs text-gray-600 font-medium">Super Apps Platform</p>
            </div>
          </Link>

{/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-semibold px-4 py-2 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover-lift text-shadow"
              >
                {item.name}
              </Link>
            ))}
          </nav>

{/* Right Side Actions */}
          <div className="flex items-center space-x-3">
            {/* Search Icon */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/browse")}
              className="hidden sm:flex text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-xl transition-all duration-300 hover-lift"
            >
              <ApperIcon name="Search" size={20} />
            </Button>

            {/* User Menu */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-xl transition-all duration-300 hover-lift"
            >
              <ApperIcon name="User" size={20} />
            </Button>

{/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-xl transition-all duration-300"
            >
              <ApperIcon name={isMobileMenuOpen ? "X" : "Menu"} size={20} />
            </Button>
          </div>
        </div>

{/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-gray-200/50 py-4 bg-gradient-to-r from-blue-50/80 to-purple-50/80 backdrop-blur-sm"
          >
            <nav className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 rounded-xl transition-all duration-300 font-semibold mx-2"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;