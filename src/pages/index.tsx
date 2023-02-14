import useSWR from "swr";
import { GetProductsFeedDocument } from "@/lib/codegenOutput/graphql";
import { graphqlDataToProductsData } from "@/lib/utils";
import { IProductGeneral } from "@/components/products";
import { ProductsGrid } from "@/components/products/display/ProductsGrid";
export const Home = () => {
  const { data, isLoading, error } = useSWR(GetProductsFeedDocument);
  if (isLoading) return <div>Ładowanie...</div>;
  if (error) return <div>Błąd</div>;
  const products = graphqlDataToProductsData(data);
  return <ProductsGrid products={products as IProductGeneral[]} />;
};
export default Home;
