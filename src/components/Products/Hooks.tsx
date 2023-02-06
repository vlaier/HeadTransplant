import axios from "axios";
import { useState } from "react";
import useSWR from "swr";
import { Pagination } from "./Components";

export const usePagination = () => {
  const [page, setPage] = useState(1);
  return {
    page,
    isFirstPage: page === 1,
    setPage: (index: number) => {
      setPage(index <= 1 ? 1 : index + 1);
    },
    nextPage: () => {
      setPage((prevIndex) => prevIndex + 1);
    },
    prevPage: () => {
      setPage((prevIndex) => prevIndex - 1);
    },
  };
};
export interface Pagination {
  page: number;
  isFirstPage: boolean;
  setPage: (index: number) => void;
  nextPage: () => void;
  prevPage: () => void;
}

export const useFilter = (id: number) => {
  const { attribute, isLoading, isError, isValidating } = useAttribute(id);
  if (isLoading) return { name: "Filtr", options: [{ name: "Opcja 1" }] };
  if (isError || !attribute.terms)
    return {
      name: "Bład Filtra",
      options: [{ name: "Wysytąpił błąd podczas ładowania filtra" }],
    };
  const options = attribute.terms.map((term: object) => {
    return { ...term };
  });
  return { name: attribute.name, options };
};
export interface FilterType {
  id: number;
  name: string;
  options: FilterOption[];
}
export interface FilterOption {
  id: number;
  name: string;
  isActive: boolean;
  switch: () => void;
}

const fetcher = (url: string, params?: Object) =>
  axios.get(url, { params: { ...params } }).then((res) => res.data);

export const useAttribute: (id: number) => AttributeHookResponse = (id) => {
  const { data, error, isLoading, isValidating } = useSWR(
    `/api/attributes/${id}`,
    fetcher
  );

  return {
    attribute: data,
    isLoading,
    isError: error,
    isValidating,
  };
};
export interface AttributeHookResponse {
  attribute: AttributeType;
  isLoading: boolean;
  isError: boolean;
  isValidating: boolean;
}
export interface AttributeType {
  id: number;
  name: string;
  terms?: AttributeType[];
}
