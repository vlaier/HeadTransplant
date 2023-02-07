import React, { useState } from "react";
import { useProductsContext } from "./Products/Context";
import { useProducts } from "./swrHooks";
import { Product } from "./Product/Product";
import Image from "next/image";
import Link from "next/link";
import { Loading } from "./Loading";
export const useSort = () => {
  const { params, updateParams: mutate } = useProductsContext();
  return { setSort: mutate };
};

export const SortBar = () => {
  const { setSort } = useSort();

  return (
    <div>
      <div
        onClick={() => setSort({ search: "hemar" })}
        className="bg-red-500 w-10 h-10"
      ></div>
      <label htmlFor="sorting">Sortowanie:</label>
      <select
        name="sorting"
        id="sorting"
        onChange={(e) => {
          setSort({ orderby: e.target.value, page: 1 });
        }}
      >
        <option value="date">Data</option>
        <option value="id">ID</option>
        <option value="title">Nazwa</option>
        <option value="price">Cena</option>
      </select>
    </div>
  );
};

export const useSearch = (params?: object) => {
  const { input } = params;
  console.log(input);
  const [query, setQuery] = useState(input);
  const { products, isLoading } = useProducts({ ...params, search: query });
  return { products, isLoading, query, setQuery };
};
interface SearchItemProps {
  isLoading?: boolean;
  item?: Product;
}
const SearchItem = (props: SearchItemProps) => {
  const { item, isLoading = false } = props;
  return (
    <div className="flex">
      {isLoading ? (
        <div
          className="w-10 h-10 rounded-full animate-pulse bg-gray-300"
          aria-hidden={true}
        ></div>
      ) : (
        <Image
          src={item?.images[0].src!}
          alt={item?.images[0].alt!}
          height={40}
          width={40}
          className="object-contain w-10 h-10 rounded-full"
        />
      )}
      {isLoading ? (
        <div className="w-full animate-pulse space-y-2" aria-hidden={true}>
          <h3 className="h-4 rounded-full  bg-gray-300"></h3>
          <h3 className="w-4/6 h-4 rounded-full  bg-gray-300"></h3>
        </div>
      ) : (
        <h3 className="text-lg rounded-full ">{item?.name}</h3>
      )}
    </div>
  );
};
const SearchResults = (props: { input?: string }) => {
  const { input = "" } = props;
  const { products, isLoading } = useSearch({ input });
  return (
    <div className="top-20 -left-0 absolute border-2  border-red-600  bg-slate-100 px-32 py-16 w-screen flex flex-col gap-4">
      {(isLoading ? Array.from(new Array(10)) : products).map(
        (item: Product) => {
          return <SearchItem item={item} isLoading={isLoading} />;
        }
      )}
    </div>
  );
};
export const SearchBar = () => {
  const [query, setQuery] = useState("");
  return (
    <div className="">
      <input
        type="text"
        placeholder="Szukaj..."
        className="rounded-xl w-64 shadow-inner shadow-gray-400 bg-gray-100 border-none"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      {query && <SearchResults input={query} />}
    </div>
  );
};
