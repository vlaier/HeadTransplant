import { useState, useContext, createContext, ReactNode } from "react";
import { Product } from "../Product/Product";
export interface CartItem {
  id: number;
  slug: string;
  name: string;
  price: number;
  stock_quantity: number;
  categories: Array<{ slug: string; name: string }>;
  images: Array<{ src: string; alt: string }>;
  count: number;
}
export interface CartState {
  items: CartItem[];
  addToCart: (item: Product) => void;
  removeFromCart: (item: CartItem) => void;
}
export const CartContext = createContext<null | CartState>(null);
export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  return (
    <CartContext.Provider
      value={{
        items: cartItems,
        addToCart: (item) => {
          setCartItems((prevCartItems) => {
            const existingItem = prevCartItems.find(
              (prevItem) => prevItem.id === item.id
            );
            if (!existingItem) {
              const newItem: CartItem = {
                ...item,
                count: 1,
              };
              return [...prevCartItems, newItem];
            }
            const updatedItems = prevCartItems.map((prevItem) => {
              if (prevItem.id === item.id) {
                console.log("Inside");
                return { ...prevItem, count: prevItem.count + 1 };
              }
              return prevItem;
            });
            return updatedItems;
          });
        },
        removeFromCart: (item) => {
          setCartItems((prevCartItems) => {
            const filtredItems = prevCartItems.filter(
              (prevItem) => !(prevItem.id === item.id)
            );
            return filtredItems;
          });
        },
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => {
  const cartState = useContext(CartContext);
  if (!cartState) {
    throw new Error("You forogot to add CartStateContextProvider");
  }
  return cartState;
};
