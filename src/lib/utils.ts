import { GetDetailedProductsQuery } from './codegenOutput/graphql';
// ADD DEEP CHECK FOR EDGES AND NODES
export const graphqlDataToProductsData = (data: GetDetailedProductsQuery) => {
  if (!data.products) return [];
  const products = data.products.edges.map(({ node }) => {
    return { ...node };
  });

  return products;
};
