import { graphqlClient } from '@/lib/client';
import { GetDetailedProductsDocument } from '@/lib/codegenOutput/graphql';
import { graphqlDataToProductsData } from '@/lib/utils';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';

export const ProductPage = ({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!product) return <div>Nie udało się załadować produktu</div>;
  return <div>{JSON.stringify(product)}</div>;
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
  const product = await graphqlClient
    .request(GetDetailedProductsDocument, {
      where: {
        slugIn: [params.slug],
      },
    })
    .then((data) => data);

  if (!product || !product.products) {
    return {
      props: {},
      notFound: true,
    };
  }

  return {
    props: {
      product: graphqlDataToProductsData(product),
    },
  };
};
export const getStaticPaths = async () => {
  return { paths: [], fallback: 'blocking' };
};
