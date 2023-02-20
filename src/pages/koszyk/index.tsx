import React from "react";
import { mockCartItemsProps } from "@/components/cart/items/CartItems.mocks";
import { CartItems } from "@/components/cart/items/CartItems";
import { useCart } from "@/components/cart/Context";

const CartPage = () => {
  return <CartItems />;
};
export default CartPage;
