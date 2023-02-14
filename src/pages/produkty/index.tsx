import { GetProductsFeedDocument } from "@/lib/codegenOutput/graphql";
import useSWR from "swr";
import { graphqlDataToProductsData } from "@/lib/utils";
import { IProductGeneral } from "@/components/products";
import { ProductsGrid } from "@/components/products/display/ProductsGrid";

const ProductsPage = () => {
  const { data, isLoading, error } = useSWR(GetProductsFeedDocument);
  if (isLoading) return <div>Ładowanie...</div>;
  if (error) return <div>Błąd</div>;
  const products = graphqlDataToProductsData(data);
  return <ProductsGrid products={products as IProductGeneral[]} />;
};

export default ProductsPage;
// GraphQL get static props
