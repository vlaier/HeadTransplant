import { IProductGeneral } from "../products";

export interface ICartItem extends IProductGeneral {
  count: number;
}
export interface ICartState {
  items: ICartItem[];
}
interface ICartContext extends ICartState {
  addToCart: (item: ICartItem) => void;
  removeFromCart: (item: ICartItem) => void;
  setItemCount: (item: ICartItem, count: number) => void;
}
