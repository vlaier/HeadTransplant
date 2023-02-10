import useSWR from "swr";
import { GetProductFeed as query } from "@/lib/queries";
export const Home = () => {
  const { data, isLoading, error } = useSWR(query);

  if (isLoading) return <div>Ładowanie...</div>;
  if (error) return <div>Błąd</div>;
  const products = data.products.edges;

  return (
    <div className="divide-y  prose-lg">
      <h2 className="text-green-600 font-bold">Sukces</h2>
      <div>
        <h3>Log:</h3>
        <p>Ilość: {JSON.stringify(products.length)}</p>
        <p>Wartość: {JSON.stringify(products)}</p>
      </div>
    </div>
  );
};
export default Home;
