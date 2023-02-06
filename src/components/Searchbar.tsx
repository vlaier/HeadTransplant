import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "./Product/Product";
import { Loading } from "./Loading";
import { useProducts } from "./swrHooks";
export const useSearch = (input: string, params?: object) => {
  const { products, isLoading } = useProducts({ ...params, search: input });
  return { products, isLoading };
};
export const Searchbar = () => {
  const [query, setQuery] = useState("");
  const { products, isLoading } = useSearch(query, { per_page: 5 });
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Szukaj..."
        className="rounded-xl w-64 shadow-inner shadow-gray-400 bg-gray-100 border-none"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      {query && products && (
        <div className="absolute z-10 flex flex-col bg-gray-300 p-1 gap-2">
          {products.map((product: Product) => (
            <Link
              href={`/produkty/produkt/${product.slug}/${product.id}`}
              onClick={() => setQuery("")}
              key={product.id}
            >
              <div className=" bg-gray-100 border border-zinc-800 rounded-t-xl flex gap-4">
                {isLoading ? (
                  <Loading />
                ) : (
                  <>
                    <Image
                      src={product.images[0].src}
                      alt={product.images[0].alt}
                      height={50}
                      width={50}
                      className="object-contain rounded-full"
                    />
                    <div>{product.name}</div>
                  </>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
