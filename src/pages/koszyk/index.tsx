import React from "react";
import Image from "next/image";
import { CartItem, useCart } from "@/components/Cart/CartContext";

const ItemElement = ({ item }: { item: CartItem }) => {
  const cartState = useCart();
  return (
    <div key={item.id} className="flex justify-between">
      <Image
        src={item.images[0].src}
        alt={item.images[0].alt}
        height={100}
        width={100}
        className="object-contain h-16 w-16 rounded-full"
      />
      <div className="self-start">
        <h3>{item.name}</h3>
        <p>
          {item.price} zł - {item.price * item.count} zł
        </p>
      </div>
      <span>{item.count}</span>
      <span
        className="text-gray-500 border-gray-500 cursor-pointer px-3 py-2 border h-fit w-fit rounded-lg"
        onClick={() => cartState.removeFromCart(item)}
      >
        Delete
      </span>
    </div>
  );
};
const CartPage = () => {
  const cartState = useCart();
  if (!cartState) throw new Error("cartState doesn't exist");
  if (!cartState.items.length) return <div>Koszyk jest pusty</div>;
  return (
    <div>
      {cartState.items.map((item) => {
        return <ItemElement item={item} />;
      })}
    </div>
  );
};
export default CartPage;
