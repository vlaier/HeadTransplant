import { IProductDetailed } from "..";

export const ProductDetailed: React.FC<IProductDetailed> = ({
  id,
  name,
  slug,
  image,
  price,
}) => {
  return <div>{name}</div>;
};
