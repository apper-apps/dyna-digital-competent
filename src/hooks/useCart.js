import { useState, useEffect } from "react";
import { toast } from "react-toastify";

export const useCart = () => {
  const [items, setItems] = useState([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("ai-hub-cart");
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (error) {
        console.error("Error loading cart from localStorage:", error);
      }
    }
  }, []);

  // Save cart to localStorage whenever items change
  useEffect(() => {
    localStorage.setItem("ai-hub-cart", JSON.stringify(items));
  }, [items]);

  const addItem = (product) => {
    setItems(currentItems => {
      const existingItem = currentItems.find(item => 
        item.Id === product.Id && item.plan === product.plan
      );

      if (existingItem) {
        toast.info(`${product.name} quantity updated in cart`);
        return currentItems.map(item =>
          item.Id === product.Id && item.plan === product.plan
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        toast.success(`${product.name} added to cart!`);
        return [...currentItems, { 
          ...product, 
          quantity: 1,
          addedAt: new Date().toISOString()
        }];
      }
    });
  };

  const removeItem = (productId, plan = null) => {
    setItems(currentItems => {
      const newItems = currentItems.filter(item => 
        !(item.Id === productId && (plan === null || item.plan === plan))
      );
      toast.info("Item removed from cart");
      return newItems;
    });
  };

  const updateQuantity = (productId, quantity, plan = null) => {
    if (quantity <= 0) {
      removeItem(productId, plan);
      return;
    }

    setItems(currentItems =>
      currentItems.map(item =>
        item.Id === productId && (plan === null || item.plan === plan)
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
    toast.info("Cart cleared");
  };

  const getItemCount = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotal = () => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const isInCart = (productId, plan = null) => {
    return items.some(item => 
      item.Id === productId && (plan === null || item.plan === plan)
    );
  };

  return {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    getItemCount,
    getTotal,
    isInCart
  };
};