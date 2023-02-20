import { Loading } from '@/components/Loading';
import { useInfiniteProducts } from '@/components/swrHooks';
import { useOnScreen } from '@/lib/hooks';
import { useEffect, useRef } from 'react';
import { IProductsGrid } from '..';
import { ProductsGrid } from './ProductsGrid';

export const InfiniteProducts: React.FC<IProductsGrid> = ({ products }) => {
  const { productsArray, isLoading, isError, size, setSize } =
    useInfiniteProducts();

  const ref = useRef(null);
  const isVisible = useOnScreen(ref, { rootMargin: '1200px' });
  useEffect(() => {
    if (isVisible && !isLoading) {
      setSize(size + 1);
    }
  }, [isVisible, isLoading]);

  if (!productsArray) return <Loading />;
  if (isError) return <div>{JSON.stringify(isError)}</div>;

  return (
    <div>
      <ProductsGrid products={products} />
      <div ref={ref} className="bg-gray-300 py-2 px-3">
        <Loading />
      </div>
    </div>
  );
};
