import { GetProductsFeedDocument } from "@/lib/codegenOutput/graphql";
import { graphqlClient } from "@/lib/client";
import { graphqlDataToProductsData } from "@/lib/utils";
import { IProductGeneral } from "@/components/products";
import { ProductsGrid } from "@/components/products/display/ProductsGrid";

const ProductsPage = ({ products }: { products: IProductGeneral[] }) => {
  return <ProductsGrid products={products} />;
};

export const getStaticProps = async () => {
  const products = await graphqlClient
    .request(GetProductsFeedDocument)
    .then((data) => data);
  if (!products || !products.products) {
    return {
      props: {},
      notFound: true,
    };
  }
  return {
    props: {
      products: graphqlDataToProductsData(products),
    },
  };
};

export default ProductsPage;
