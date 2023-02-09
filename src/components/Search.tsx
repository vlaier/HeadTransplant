import React, { useState } from "react";
import { useProductsContext } from "./Products/Context";
import { useProducts } from "./swrHooks";
import { Product } from "./Product/Product";
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

export const useSearch = (params?: ProductsParams) => {
  const { input = "" } = { ...params };
  const [query, setQuery] = useState(input);
  const { products, isLoading } = useProducts({ ...params, search: query });
  return { products, isLoading, query, setQuery };
};
interface SearchItemProps {
  isLoading?: boolean;
  item?: Product;
}
interface ProductsParams {
  input?: string;
}
