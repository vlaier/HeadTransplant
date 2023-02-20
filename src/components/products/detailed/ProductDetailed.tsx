import { IProductDetailed } from '..';

export const ProductDetailed: React.FC<IProductDetailed> = (props) => {
  const { id, name, slug, image, price } = { ...props };
  return <div>{name}</div>;
};
