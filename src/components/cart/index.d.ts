import { IProductGeneral } from '../products';

export interface ICartItem extends IProductGeneral {
  count: number;
}
export interface ICartContext {
  items: ICartItem[];
  addToCart: (item: ICartItem) => void;
  removeFromCart: (item: ICartItem) => void;
  setItemCount: (item: ICartItem, count: number) => void;
}
