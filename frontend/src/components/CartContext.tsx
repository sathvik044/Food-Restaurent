import { createContext, useState, useEffect, type ReactNode, useContext } from "react";
import axios from "axios";

export interface CartItem {
  id: number;
  quantity: number;
  menu: {
    id: number;
    name: string;
    price: number;
    image?: string;
  };
}

export interface MenuItem {
  id: number;
  name: string;
  price: number;
  image?: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: MenuItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  fetchCart: () => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  
  // ✅ AUTH HELPERS
  const getUserData = () => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  };

  const getAuthHeader = () => {
    const userRole = getUserData();
    return userRole?.token ? { Authorization: `Bearer ${userRole.token}` } : {};
  };

  const getUserId = () => {
    const userRole = getUserData();
    return userRole?.id || 0;
  };

  const fetchCart = () => {
    const userId = getUserId();
    if (!userId) return;

    axios
      .get(`https://restaurent-backend-u62e.onrender.com/api/cart/user/${userId}`, {
        headers: getAuthHeader()
      })
      .then((res: any) => {
        setCart(res.data);
      })
      .catch((err: any) => console.error("Fetch cart error:", err));
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const addToCart = (item: MenuItem) => {
    const userId = getUserId();
    if (!userId) {
      alert("Please login first! 🔐");
      return;
    }

    axios
      .post(`https://restaurent-backend-u62e.onrender.com/api/cart?userId=${userId}&menuId=${item.id}&quantity=1`, {}, {
        headers: getAuthHeader()
      })
      .then(() => fetchCart())
      .catch((err: any) => console.error("Add to cart error:", err));
  };

  const removeFromCart = (id: number) => {
    axios
      .delete(`https://restaurent-backend-u62e.onrender.com/api/cart/${id}`, {
        headers: getAuthHeader()
      })
      .then(() => fetchCart())
      .catch((err: any) => console.error("Remove from cart error:", err));
  };

  const clearCart = () => {
    const userId = getUserId();
    axios
      .delete(`https://restaurent-backend-u62e.onrender.com/api/cart/clear/${userId}`, {
        headers: getAuthHeader()
      })
      .then(() => fetchCart())
      .catch((err: any) => console.error("Clear cart error:", err));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, fetchCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
