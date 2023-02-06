import { useState, useContext, createContext, ReactNode } from "react";
export interface PageState {
  params: FetcherParameters;
  updateParams: (parameter: object) => void;
  resetParams: () => void;
}
export interface FetcherParameters {
  page?: number;
  attribute?: string;
  attribute_term?: string;
  offset?: number;
}

export const ProductsContext = createContext<null | PageState>(null);
export const ProductsConfig = ({ children }: { children: ReactNode }) => {
  const defaultParams = {
    page: 1,
    offset: 0,
    per_page: 18,
  };
  const [params, setParams] = useState({ ...defaultParams });
  return (
    <ProductsContext.Provider
      value={{
        params,
        updateParams: (parameter) => {
          setParams((prevParams) => {
            return { ...prevParams, ...parameter };
          });
        },
        resetParams: () => setParams({ ...defaultParams }),
      }}
    >
      <div>{JSON.stringify(params)}</div>
      {children}
    </ProductsContext.Provider>
  );
};
export const useProductsContext = () => {
  const productsStateContext = useContext(ProductsContext);
  if (!productsStateContext) {
    throw new Error("You forgot to add ProductsContext");
  }

  return { ...productsStateContext };
};
