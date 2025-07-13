import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";
import Card from "@/components/atoms/Card";
import Badge from "@/components/atoms/Badge";
import { useCart } from "@/hooks/useCart";
import { toast } from "react-toastify";

const CartPage = () => {
  const { items, updateQuantity, removeItem, clearCart } = useCart();
  const [promoCode, setPromoCode] = useState("");
  const [appliedPromo, setAppliedPromo] = useState(null);

  const promoCodes = {
    "WELCOME10": { discount: 0.1, description: "10% off your first order" },
    "SAVE20": { discount: 0.2, description: "20% off premium apps" },
    "STUDENT": { discount: 0.15, description: "15% student discount" }
  };

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = appliedPromo ? subtotal * appliedPromo.discount : 0;
  const tax = (subtotal - discount) * 0.08; // 8% tax
  const total = subtotal - discount + tax;

  const handleApplyPromo = () => {
    const promo = promoCodes[promoCode.toUpperCase()];
    if (promo) {
      setAppliedPromo({ code: promoCode.toUpperCase(), ...promo });
      toast.success(`Promo code applied: ${promo.description}`);
    } else {
      toast.error("Invalid promo code");
    }
    setPromoCode("");
  };

  const handleRemovePromo = () => {
    setAppliedPromo(null);
    toast.info("Promo code removed");
  };

  const recommendedApps = [
    {
      id: 1,
      name: "Slack Premium",
      vendor: "Slack Technologies",
      price: 8,
      description: "Enhanced team communication",
      category: "Communication"
    },
    {
      id: 2,
      name: "Notion Pro",
      vendor: "Notion Labs",
      price: 10,
      description: "Advanced productivity workspace",
      category: "Productivity"
    },
    {
      id: 3,
      name: "Figma Professional",
      vendor: "Figma Inc",
      price: 15,
      description: "Collaborative design platform",
      category: "Design"
    }
  ];

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center mx-auto mb-8">
              <ApperIcon name="ShoppingCart" size={48} className="text-gray-400" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Cart is <span className="gradient-text">Empty</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Discover amazing apps from leading companies like Slack, Notion, and Figma. 
              Start building your perfect toolkit today!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/browse">
                <Button size="lg" className="px-8">
                  <ApperIcon name="Search" size={20} className="mr-2" />
                  Browse Apps
                </Button>
              </Link>
              <Link to="/">
                <Button variant="outline" size="lg" className="px-8">
                  <ApperIcon name="Home" size={20} className="mr-2" />
                  Go Home
                </Button>
              </Link>
            </div>

            {/* Recommended Apps */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Popular Apps</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {recommendedApps.map((app) => (
                  <Card key={app.id} className="p-6 bg-white border-gray-200 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-start space-x-3 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                        <ApperIcon name="Zap" size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{app.name}</h3>
                        <p className="text-gray-600 text-sm">{app.vendor}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm mb-4">{app.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-gray-900">${app.price}/month</span>
                        <Badge variant="default" className="text-xs">{app.category}</Badge>
                      </div>
                      <Button size="sm">
                        <ApperIcon name="Plus" size={16} className="mr-1" />
                        Add
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Shopping <span className="gradient-text">Cart</span>
          </h1>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600 transition-colors duration-200">Home</Link>
            <ApperIcon name="ChevronRight" size={16} />
            <span className="text-gray-900 font-medium">Cart ({items.length} items)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <Card className="p-6 bg-white border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Cart Items</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearCart}
                  className="text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                  <ApperIcon name="Trash2" size={16} className="mr-2" />
                  Clear All
                </Button>
              </div>

              <div className="space-y-6">
                {items.map((item, index) => (
                  <motion.div
                    key={`${item.Id}-${item.plan || 'default'}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start space-x-4 py-4 border-b border-gray-200 last:border-b-0"
                  >
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-md">
                      <ApperIcon name="Zap" size={24} className="text-white" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-900 text-lg">{item.name}</h3>
                          <p className="text-gray-600 text-sm">{item.vendor}</p>
                          {item.plan && (
                            <Badge variant="default" className="mt-1">
                              {item.plan}
                            </Badge>
                          )}
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem(item.Id, item.plan)}
                          className="text-gray-400 hover:text-red-600"
                        >
                          <ApperIcon name="X" size={16} />
                        </Button>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center space-x-3">
                          <span className="text-sm text-gray-600">Quantity:</span>
                          <div className="flex items-center space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateQuantity(item.Id, item.plan, Math.max(1, item.quantity - 1))}
                              className="w-8 h-8 p-0"
                            >
                              <ApperIcon name="Minus" size={14} />
                            </Button>
                            <span className="w-8 text-center font-medium">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateQuantity(item.Id, item.plan, item.quantity + 1)}
                              className="w-8 h-8 p-0"
                            >
                              <ApperIcon name="Plus" size={14} />
                            </Button>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-gray-900">
                            ${(item.price * item.quantity).toFixed(2)}
                          </div>
                          <div className="text-sm text-gray-600">
                            ${item.price.toFixed(2)} each
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* Promo Code */}
            <Card className="p-6 bg-white border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4">Promo Code</h3>
              {appliedPromo ? (
                <div className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div>
                    <div className="font-medium text-green-900">{appliedPromo.code}</div>
                    <div className="text-sm text-green-700">{appliedPromo.description}</div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleRemovePromo}
                    className="text-green-600 hover:text-green-700"
                  >
                    <ApperIcon name="X" size={16} />
                  </Button>
                </div>
              ) : (
                <div className="flex space-x-3">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Enter promo code"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <Button onClick={handleApplyPromo} disabled={!promoCode.trim()}>
                    Apply
                  </Button>
                </div>
              )}
            </Card>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <Card className="p-6 bg-white border-gray-200 sticky top-4">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({items.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                {appliedPromo && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount ({appliedPromo.code})</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                )}

                <div className="flex justify-between text-gray-600">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between text-lg font-bold text-gray-900">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <Link to="/checkout">
                  <Button size="lg" className="w-full">
                    <ApperIcon name="CreditCard" size={20} className="mr-2" />
                    Proceed to Checkout
                  </Button>
                </Link>
                <Link to="/browse">
                  <Button variant="outline" size="lg" className="w-full">
                    <ApperIcon name="ArrowLeft" size={20} className="mr-2" />
                    Continue Shopping
                  </Button>
                </Link>
              </div>

              {/* Security Badge */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <ApperIcon name="Shield" size={16} className="text-green-600" />
                  <span>Secure checkout powered by Stripe</span>
                </div>
              </div>
            </Card>

            {/* Recommended Apps */}
            <Card className="p-6 bg-white border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4">You might also like</h3>
              <div className="space-y-4">
                {recommendedApps.slice(0, 2).map((app) => (
                  <div key={app.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                      <ApperIcon name="Zap" size={16} className="text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-gray-900 text-sm">{app.name}</h4>
                      <p className="text-gray-600 text-xs">{app.vendor}</p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="font-bold text-gray-900 text-sm">${app.price}/mo</span>
                        <Button size="sm" className="text-xs px-3 py-1">
                          <ApperIcon name="Plus" size={12} className="mr-1" />
                          Add
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;