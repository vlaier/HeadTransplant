export interface IProductDetailed {
  id: string;
  name: string;
  slug: string;
  image: IProductImage;
  price: number;
  imageArray?: IProductImage[];
}
export type IProductGeneral = Pick<
  IProductDetailed,
  'id' | 'name' | 'slug' | 'image' | 'price'
>;
export interface IProductsGrid {
  products: IProductGeneral[];
}
export interface IProductImage {
  id: string;
  sourceUrl: string;
  altText: string;
  mediaDetails?: {
    height?: number;
    width?: number;
  };
}
