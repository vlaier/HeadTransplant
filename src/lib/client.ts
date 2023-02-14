import { request, GraphQLClient, RequestDocument } from "graphql-request";
export const graphqlClient = new GraphQLClient(
  `http://localhost/wordpress/graphql`
);
export const fetcher = (query: RequestDocument, queryVar?: object) =>
  graphqlClient.request(query, queryVar);
export const swrConfig = {
  fetcher,
};
