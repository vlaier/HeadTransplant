import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useCart } from '../Context';
export interface ICartbar {
  sampleTextProp: string;
}

export const Cartbar: React.FC = () => {
  const cartState = useCart();
  return (
    <div className="flex hover:text-zinc-700 text-zinc-400 p-4 bg-gray-100 rounded-full shadow-inner shadow-gray-400">
      <span>{cartState.items.length}</span>
      <ShoppingCartIcon className="w-6 h-6" />
    </div>
  );
};
