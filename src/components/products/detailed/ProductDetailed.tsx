import { IProductDetailed } from '..';

export const ProductDetailed: React.FC<IProductDetailed> = (props) => {
  const { name } = { ...props };
  return <div>{name}</div>;
};
