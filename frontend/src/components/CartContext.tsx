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
  const userId = 2; // Hardcoded for now until authentication is fully implemented

  const fetchCart = () => {
    axios
      .get(`http://localhost:8081/api/cart/user/${userId}`)
      .then((res) => {
        setCart(res.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const addToCart = (item: MenuItem) => {
    axios
      .post(`http://localhost:8081/api/cart?userId=${userId}&menuId=${item.id}&quantity=1`)
      .then(() => fetchCart())
      .catch(err => console.error(err));
  };

  const removeFromCart = (id: number) => {
    axios
      .delete(`http://localhost:8081/api/cart/${id}`)
      .then(() => fetchCart())
      .catch(err => console.error(err));
  };

  const clearCart = () => {
    axios
      .delete(`http://localhost:8081/api/cart/clear/${userId}`)
      .then(() => fetchCart())
      .catch(err => console.error(err));
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
