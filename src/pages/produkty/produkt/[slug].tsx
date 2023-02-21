import { IProductDetailed } from '@/components/products';
import { ProductDetailed } from '@/components/products/detailed/ProductDetailed';
import { graphqlClient } from '@/lib/client';
import { GetDetailedProductsDocument } from '@/lib/codegenOutput/graphql';
import { graphqlDataToProductsData } from '@/lib/utils';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
export const ProductPage = ({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!product) return <div>Nie udało się załadować produktu</div>;

  return <ProductDetailed {...(product as IProductDetailed)} />;
};
export default ProductPage;

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<{ slug: string }>) => {
  if (!params || !params.slug) {
    return {
      props: {},
      notFound: true,
    };
  }
  const products = await graphqlClient
    .request(GetDetailedProductsDocument, {
      where: {
        slugIn: [params.slug],
      },
    })
    .then((data) => data);

  if (!products || !products.products) {
    return {
      props: {},
      notFound: true,
    };
  }
  const product = graphqlDataToProductsData(products)[0];
  const description = product.description;
  console.log(description);

  return {
    props: {
      product: { ...product, description: product.description },
    },
  };
};

export const getStaticPaths = async () => {
  return { paths: [], fallback: 'blocking' };
};
