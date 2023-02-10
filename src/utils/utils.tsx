import { MDXRemoteSerializeResult } from "next-mdx-remote/dist/types";
import axios from "axios";
import addOAuthInterceptor, { OAuthInterceptorConfig } from "axios-oauth-1.0a";
const isDevelopment = process.env.NODE_ENV === "development";
const consumerSecret = isDevelopment
  ? process.env.LOCAL_CONSUMER_SECRET
  : process.env.CONSUMER_SECRET;
const consumerKey = isDevelopment
  ? process.env.LOCAL_CONSUMER_KEY
  : process.env.CONSUMER_KEY;

export const url = isDevelopment ? process.env.LOCAL_URL : process.env.URL;
if (!consumerKey || !consumerSecret || !url) {
  throw new Error("Brak danych uwierzytelniających do API");
}

export const client = axios;
interface OptionsAuth {
  algorithm: "HMAC-SHA1" | "HMAC-SHA256";
  key: string;
  secret: string;
}
const options: OptionsAuth = {
  algorithm: "HMAC-SHA1",
  key: consumerKey,
  secret: consumerSecret,
};

addOAuthInterceptor(client, options);

export interface ProductApiResponse {
  id: number;
  name: string;
  slug: string;
  permalink: string;
  date_created: string;
  date_created_gmt: string;
  date_modified: string;
  date_modified_gmt: string;
  type: "simple" | "variable" | "grouped" | "external";
  status: "any" | "draft" | "pending" | "private" | "publish";
  featured: boolean;
  catalog_visibility: "visible" | "catalog" | "search" | "hidden";

  description: string;
  serializedDescription: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, string>
  >;
  short_description: string;
  sku: string;
  price: string;
  regular_price: string;
  sale_price: string;
  date_on_sale_from: null;
  date_on_sale_from_gmt: null;
  date_on_sale_to: null;
  date_on_sale_to_gmt: null;
  price_html: string;
  on_sale: boolean;
  purchasable: boolean;
  total_sales: number;
  virtual: boolean;
  downloadable: boolean;
  downloads: any[];
  download_limit: number;
  download_expiry: number;
  external_url: string;
  button_text: string;
  tax_status: "taxable" | "shipping" | "none";
  tax_class: "standard" | "reduced-rate" | "zero-rate";
  manage_stock: boolean;
  stock_quantity: number;
  stock_status: "instock" | "outofstock" | "onbackorder";
  backorders: "no" | "notify" | "yes";
  backorders_allowed: boolean;
  backordered: boolean;
  sold_individually: boolean;
  weight: string;
  dimensions: Dimensions;
  shipping_required: boolean;
  shipping_taxable: boolean;
  shipping_class: string;
  shipping_class_id: number;
  reviews_allowed: boolean;
  average_rating: string;
  rating_count: number;
  related_ids: number[];
  upsell_ids: number[];
  cross_sell_ids: number[];
  parent_id: number;
  purchase_note: string;
  categories: Category[];
  tags: any[];
  images: Image[];
  attributes: Attributes[];
  default_attributes: any[];
  variations: number[];
  grouped_products: number[];
  menu_order: number;
  meta_data: any[];
  _links: Links;
}
export interface Attributes {
  id: number;
  name: string;
  position: number;
  visible: boolean;
  varation: boolean;
  options: string[];
}
export interface Links {
  self: Collection[];
  collection: Collection[];
}

export interface Collection {
  href: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
}

export interface Dimensions {
  length: string;
  width: string;
  height: string;
}

export interface Image {
  id: number;
  date_created: string;
  date_created_gmt: string;
  date_modified: string;
  date_modified_gmt: string;
  src: string;
  name: string;
  alt: string;
}
