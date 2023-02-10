import { useEffect, useRef } from "react";
import { useOnScreen } from "./Hooks/hooks";
import { Loading } from "./Loading";
import { useProductsContext } from "./Products/Context";
import { ProductsGrid } from "./ProductsGrid";
import { useInfiniteProducts } from "./swrHooks";
export const InfiniteProducts = () => {
  const { params } = useProductsContext();
  const { productsArray, isLoading, isError, size, setSize } =
    useInfiniteProducts();

  const ref = useRef(null);
  const isVisible = useOnScreen(ref, { rootMargin: "1200px" });
  useEffect(() => {
    if (isVisible && !isLoading) {
      setSize(size + 1);
    }
  }, [isVisible]);

  if (!productsArray) return <Loading />;
  if (isError) return <div>{JSON.stringify(isError)}</div>;

  return (
    <div>
      <ProductsGrid products={productsArray.flat()} />
      <div ref={ref} className="bg-gray-300 py-2 px-3">
        <Loading />
      </div>
    </div>
  );
};
