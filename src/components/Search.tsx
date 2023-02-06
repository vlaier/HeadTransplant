import React from "react";
import { useProductsContext } from "./Products/Context";
import { useProducts } from "./swrHooks";
import useSWR from "swr";
export const useSearch = (input: string, params?: object) => {
  const { products, isLoading } = useProducts({ ...params, search: input });
  return { products, isLoading };
};

export const SearchBar = () => {
  return <div>Search</div>;
};

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
