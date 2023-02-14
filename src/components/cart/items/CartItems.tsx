import { ICartItem, ICartState } from "..";
import Image from "next/image";
import { useCart } from "../Context";
export const CartItems = ({ items }: { items: ICartItem[] }) => {
  return (
    <div>
      {items.map((item) => {
        return (
          <div className="grid grid-cols-3">
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
          </div>
        );
      })}
    </div>
  );
};
