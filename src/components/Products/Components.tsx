import React, { useEffect, useState } from "react";
import { useProductsContext } from "./Context";
import { useFilter, usePagination } from "./Hooks";

export const Pagination = () => {
  const { page, isFirstPage, nextPage, prevPage } = usePagination();
  const { updateParams } = useProductsContext();
  useEffect(() => {
    updateParams({ offset: 18 * (page - 1) });
  }, [page]);

  return (
    <div>
      <button
        disabled={isFirstPage}
        onClick={() => {
          prevPage();
        }}
        className="bg-gray-300 hover:bg-gray-400 border-gray-600 border py-2 px-4 disabled:bg-gray-200"
      >
        Go prev
      </button>
      {page}
      <button
        onClick={() => {
          nextPage();
        }}
        className="bg-gray-300 hover:bg-gray-400 border-gray-600 border py-2 px-4 disabled:bg-gray-200"
      >
        Go next
      </button>
    </div>
  );
};

export const Filter = ({ id }: { id: number }) => {
  const { name, options } = useFilter(26);
  const Option = ({ item }: { item: any }) => {
    return (
      <div>
        <input type="checkbox" />
        <p>{item.name}</p>
      </div>
    );
  };
  return (
    <div>
      <h3>{name}</h3>
      <Option item={options[0]} />
    </div>
  );
};
