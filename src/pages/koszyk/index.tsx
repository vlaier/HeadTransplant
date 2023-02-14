import React from "react";
import { mockCartItemsProps } from "@/components/cart/items/CartItems.mocks";
import { CartItems } from "@/components/cart/items/CartItems";

const CartPage = () => {
  return <CartItems {...mockCartItemsProps.base} />;
};
export default CartPage;
