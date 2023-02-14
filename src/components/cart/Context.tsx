import { useState, useContext, createContext, ReactNode } from "react";
import { ICartItem, ICartContext } from ".";

export const CartContext = createContext<null | ICartContext>(null);
export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);
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
              const newItem: ICartItem = {
                ...item,
              };
              return [...prevCartItems, newItem];
            }
            const updatedItems = prevCartItems.map((prevItem) => {
              if (prevItem.id === item.id) {
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
        setItemCount: (item, count) => {
          setCartItems((prevCartItems) => {
            const newItemCount = count >= 0 ? count : 0;
            const newCartItems = prevCartItems.map((newItem) => {
              if (newItem.id === item.id) {
                return { ...item, count: newItemCount };
              }
              return newItem;
            });
            return newCartItems;
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
