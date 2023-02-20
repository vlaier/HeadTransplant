import { TrashIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useCart } from '../Context';

export const CartItems: React.FC = () => {
  const { items, setItemCount: setCount, removeFromCart } = useCart();
  return (
    <div className="py-8 mx-auto">
      {items.map((item) => {
        return (
          <div className="grid grid-cols-4 mb-4  " key={item.id}>
            <div className="w-10 h-10">
              <Image
                src={item.image.sourceUrl}
                alt={item.image.altText}
                width={item.image.mediaDetails?.width || 100}
                height={item.image.mediaDetails?.height || 100}
              />
            </div>
            <div>
              {item.name}-{item.count}
            </div>
            <div>
              <input
                type="number"
                value={item.count}
                onChange={(e) => setCount(item, parseInt(e.target.value))}
                className="w-16 h-12 rounded-lg bg-gray-100 border-none shadow-inner shadow-gray-400"
              />
            </div>
            <button
              className="flex flex-col items-center justify-center border  "
              onClick={() => removeFromCart(item)}
            >
              <div className="w-16 flex flex-col items-center  text-gray-700 hover:text-gray-400">
                <TrashIcon className="w-5" />
                <span className="text-sm">Usuń</span>
              </div>
            </button>
          </div>
        );
      })}
    </div>
  );
};
