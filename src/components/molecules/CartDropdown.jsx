import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";
import Card from "@/components/atoms/Card";

const CartDropdown = ({ items, isOpen, onClose, onRemoveItem, onClearCart }) => {
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-full mt-2 w-96 z-50"
          >
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Shopping Cart</h3>
                {items.length > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={onClearCart}
                    className="text-surface-400 hover:text-red-400"
                  >
                    Clear All
                  </Button>
                )}
              </div>

              {items.length === 0 ? (
                <div className="text-center py-8">
                  <ApperIcon name="ShoppingCart" size={48} className="text-surface-600 mx-auto mb-4" />
                  <p className="text-surface-400 mb-4">Your cart is empty</p>
                  <Button variant="ghost" onClick={onClose}>
                    Continue Shopping
                  </Button>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                    {items.map((item) => (
                      <div key={item.Id} className="flex items-center space-x-4 p-3 bg-surface-700 rounded-lg">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center flex-shrink-0">
                          <ApperIcon name="Zap" size={16} className="text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-white text-sm truncate">{item.name}</h4>
                          <p className="text-surface-400 text-xs">Qty: {item.quantity}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-white text-sm">${item.price}</p>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => onRemoveItem(item.Id)}
                            className="text-surface-400 hover:text-red-400 p-1"
                          >
                            <ApperIcon name="Trash2" size={14} />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-surface-700 pt-4">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-semibold text-white">Total:</span>
                      <span className="font-bold text-xl text-white">${total.toFixed(2)}</span>
                    </div>
                    <div className="space-y-2">
                      <Link to="/checkout" onClick={onClose}>
                        <Button className="w-full" size="lg">
                          <ApperIcon name="CreditCard" size={18} className="mr-2" />
                          Checkout
                        </Button>
                      </Link>
                      <Link to="/cart" onClick={onClose}>
                        <Button variant="secondary" className="w-full">
                          View Cart
                        </Button>
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </Card>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDropdown;