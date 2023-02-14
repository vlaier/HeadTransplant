import React from "react";
import { mockCartItemsProps } from "@/components/cart/items/CartItems.mocks";
import { CartItems } from "@/components/cart/items/CartItems";
import { useCart } from "@/components/cart/Context";

const CartPage = () => {
  const { items, setItemCount } = useCart();
  return <CartItems items={items} setCount={setItemCount} />;
};
export default CartPage;
