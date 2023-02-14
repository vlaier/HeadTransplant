import { request, GraphQLClient, RequestDocument } from "graphql-request";
export const graphqlClient = new GraphQLClient(
  `http://serwer2252942.home.pl/autoinstalator/wordpress/graphql`
);
export const fetcher = (query: RequestDocument, queryVar?: object) =>
  graphqlClient.request(query, queryVar);
export const swrConfig = {
  fetcher,
};
