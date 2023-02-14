import { GetProductsFeedDocument } from "@/lib/codegenOutput/graphql";
import useSWR, { unstable_serialize } from "swr";
import { graphqlDataToProductsData } from "@/lib/utils";
import { IProductGeneral } from "@/components/products";
import { ProductsGrid } from "@/components/products/display/ProductsGrid";
import { graphqlClient } from "@/lib/client";
import { InferGetStaticPropsType, GetStaticPropsContext } from "next";
import { fetcher } from "../../lib/client";
import request from "graphql-request";
const ProductsPage = ({
  fallback,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const endpoint =
    "https://serwer2252942.home.pl/autoinstalator/wordpress/graphql";

  const { data, isLoading, error } = useSWR(
    [GetProductsFeedDocument],
    ([query]) => fetcher(query),
    { fallback }
  );
  if (!data) return <div>Ładowanie...</div>;
  if (error) return <div>Błąd</div>;
  const products = graphqlDataToProductsData(data);
  return <ProductsGrid products={products as IProductGeneral[]} />;
};

export default ProductsPage;
export const getStaticProps = async () => {
  const endpoint =
    "https://serwer2252942.home.pl/autoinstalator/wordpress/graphql";
  const data = await graphqlClient
    .request(GetProductsFeedDocument, {})
    .then((data) => data);

  if (!data || !data.products) {
    return {
      props: {},
      notFound: true,
    };
  }
  return {
    props: {
      fallback: {
        [unstable_serialize([GetProductsFeedDocument])]: data,
      },
    },
  };
};
