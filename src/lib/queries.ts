export const GetProductFeed = `
  query {
    products(where: { supportedTypesOnly: true }) {
      edges {
        cursor
        node {
          id
          slug
          ... on ContentNode {
            uri
          }
          name
          type
          image {
            id
            sourceUrl
            altText
          }
          ... on SimpleProduct {
            onSale
            price
            regularPrice
          }
          ... on VariableProduct {
            onSale
            price
            regularPrice
          }
        }
      }
    }
  }
`;
