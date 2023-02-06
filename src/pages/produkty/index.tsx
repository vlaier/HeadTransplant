import { InferGetStaticPropsType } from "next";
import { Product, ProductCard } from "@/components/Product/Product";
import { Sidebar } from "@/components/Product/Sidebar";
import { client } from "@/utils/utils";
import { SWRConfig, unstable_serialize } from "swr";
import { useProducts } from "@/components/swrHooks";
import { Loading } from "@/components/Loading";

import {
  ProductsConfig,
  useProductsContext,
} from "@/components/Products/Context";
import { SortBar } from "@/components/Search";
import { InfiniteProducts } from "@/components/InfiniteProducts";

export interface ProductType {
  id: string;
  slug: string;
  name: string;
  price: string;
  stock_quantity: number;
  categories: Array<any>;
  images: Array<any>;
}

const ProductsPage = ({
  fallbackData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <ProductsConfig>
      <SWRConfig value={{ fallbackData }}>
        <div className="flex ">
          <Sidebar
            options={{
              filters: {
                ids: [16, 19],
              },
            }}
          />
          <div className="flex flex-col  grow">
            <SortBar />
            <InfiniteProducts />
          </div>
        </div>
      </SWRConfig>
    </ProductsConfig>
  );
};
export const getStaticProps = async () => {
  const res = await client.get(
    "http://localhost/wordpress/wp-json/wc/v3/products"
  );
  const products: any[] = await res.data;
  if (!products) {
    return { props: {}, notFound: true };
  }
  return {
    props: {
      fallbackData: [products],
    },
    fallback: {},
  };
};
//   return {
//     props: {
//       fallback: {
//         [unstable_serialize(["/api/products/", {}])]: products,
//         [unstable_serialize(["/api/products/", { page: 1 }])]: products,
//         [unstable_serialize(["/api/products/", { offset: 0 }])]: products,
//       },
//     },
//   };
// };
export default ProductsPage;
