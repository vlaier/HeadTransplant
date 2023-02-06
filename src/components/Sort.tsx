import React from "react";
import { useProductsContext } from "./Products/Context";

export const Sort = () => {
  const { updateParams: mutate } = useProductsContext();
  return (
    <div>
      <label htmlFor="sorting">Sortowanie:</label>
      <select
        name="sorting"
        id="sorting"
        onChange={(e) => {
          mutate({ orderby: e.target.value, page: 1 });
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
