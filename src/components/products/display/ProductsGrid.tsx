import { IProductsGrid } from '..';
import { ProductCard } from '../card/ProductCard';
export const ProductsGrid: React.FC<IProductsGrid> = (props) => {
  const { products } = { ...props };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-4 md:gap-y-8 mx-auto py-4">
      {products.map((product) => {
        return <ProductCard key={product.id} {...product} />;
      })}
    </div>
  );
};
