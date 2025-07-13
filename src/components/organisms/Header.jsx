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
    { name: "For Vendors", href: "/vendor" },
    { name: "Pricing", href: "/pricing" },
    { name: "Support", href: "/support" }
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-40 bg-surface-900/95 backdrop-blur-sm border-b border-surface-700"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
              <ApperIcon name="Zap" size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold gradient-text">AI Hub</h1>
              <p className="text-xs text-surface-400 hidden sm:block">AI App Marketplace</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-surface-300 hover:text-white transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/browse")}
              className="hidden sm:flex"
            >
              <ApperIcon name="Search" size={20} />
            </Button>

            {/* Cart */}
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="relative"
              >
                <ApperIcon name="ShoppingCart" size={20} />
                {cartItemCount > 0 && (
                  <Badge 
                    variant="primary" 
                    className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                  >
                    {cartItemCount}
                  </Badge>
                )}
              </Button>
              <CartDropdown
                items={items}
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
                onRemoveItem={removeItem}
                onClearCart={clearCart}
              />
            </div>

            {/* User Menu */}
            <Button variant="ghost" size="sm">
              <ApperIcon name="User" size={20} />
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden"
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
            className="lg:hidden border-t border-surface-700 py-4"
          >
            <nav className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-2 text-surface-300 hover:text-white hover:bg-surface-800 rounded-lg transition-colors duration-200"
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