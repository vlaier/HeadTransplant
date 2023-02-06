import React from "react";
import { ProductCard } from "./Product/Product";

export const ProductsGrid = ({ products }: { products: any[] }) => {
  const productsElements = products.map((product) => {
    return <ProductCard key={product.id} product={product} />;
  });
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
      {productsElements}
    </div>
  );
};
