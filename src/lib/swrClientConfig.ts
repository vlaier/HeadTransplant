import { url } from "@/utils/utils";
import { request, RequestDocument } from "graphql-request";
export const fetcher = (query: RequestDocument) =>
  request(`http://localhost/wordpress/graphql`, query);
export const swrClientConfig = {
  fetcher,
};
