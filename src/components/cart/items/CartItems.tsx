import { ICartItem } from "..";
import Image from "next/image";
export const CartItems = ({
  items,
  setCount,
}: {
  items: ICartItem[];
  setCount: (item: ICartItem, count: number) => void;
}) => {
  return (
    <div>
      {items.map((item) => {
        return (
          <div className="grid grid-cols-3 " key={item.id}>
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
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
