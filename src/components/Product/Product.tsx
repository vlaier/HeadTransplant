import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Loading } from "../Loading";
import { useCart } from "../Cart/CartContext";
export interface Product {
  id: number;
  slug: string;
  name: string;
  price: number;
  stock_quantity: number;
  categories: Array<{ slug: string; name: string }>;
  images: Array<{ src: string; alt: string }>;
}
export const ProductDetail = () => {
  return <div>Produkt</div>;
};
export const ProductCard = ({ product }: { product: Product }) => {
  const cartState = useCart();
  return (
    <div
      key={product.id}
      className="rounded-xl shadow-md flex flex-col w-96 mx-auto"
    >
      <Link href={`/produkty/produkt/${product.slug}/${product.id}`}>
        <Image
          src={product.images[0]?.src}
          alt={product.images[0]?.alt}
          width={450}
          height={1000}
          className="object-contain h-80 rounded-t-xl w-full m-auto bg-zinc-200"
        />
      </Link>
      <div className="flex flex-col gap-8 border rounded-b-xl">
        <div className="text-sm text-gray-700">
          <Link href={`produkty/kategoria/${product.categories[0].slug}`}>
            {product.categories[0].name}
          </Link>
        </div>
        <Link href={`/produkty/produkt/${product.slug}/${product.id}`}>
          <div>
            <div>{product.name}</div>
            <div>{product.price} zł</div>
            <div>
              {product.stock_quantity &&
                `${product.stock_quantity} w magazynie`}
            </div>
          </div>
        </Link>
        <button
          onClick={() => cartState.addToCart(product)}
          className=" self-center bg-zinc-600  w-fit py-6 px-10 text-lg rounded-full text-gray-50 hover: hover:bg-zinc-500 mt-16 mb-4"
        >
          Dodaj do koszyka
        </button>
      </div>
    </div>
  );
};
