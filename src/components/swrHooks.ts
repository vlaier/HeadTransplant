import axios from 'axios';
import useSWR from 'swr';
import useInfiniteSWR from 'swr/infinite';
const fetcher = (url: string, params?: Object) =>
  axios.get(url, { params: { ...params } }).then((res) => res.data);

export const useProducts = (params?: object, options?: object) => {
  const { data, error, isLoading, isValidating } = useSWR(
    ['/api/products/', params],
    ([url, params]) => fetcher(url, params),
    { ...options }
  );
  if (isLoading)
    return {
      products: [],
      isLoading,
      isError: error,
      isValidating,
    };
  return {
    products: data,
    isLoading,
    isError: error,
    isValidating,
  };
};

export const useInfiniteProducts = (params?: object, options?: object) => {
  const getKey = (pageIndex: number) => {
    return { url: `/api/products`, params: { ...params, page: pageIndex + 1 } }; // using offset instead of page!!
  };
  const { data, size, setSize, error, isLoading, isValidating } =
    useInfiniteSWR(getKey, ({ url, params }) => fetcher(url, params), {
      ...options,
    });
  return {
    productsArray: data,
    size,
    setSize,
    isLoading,
    isError: error,
    isValidating,
    getKey,
  };
};

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
