import { useCart } from '@/components/cart/Context';
import Image from 'next/image';
import Link from 'next/link';
import { IProductGeneral } from '..';

export const ProductCard: React.FC<IProductGeneral> = (props) => {
  const { id, name, slug, image, price } = { ...props };
  const { addToCart } = useCart();
  return (
    <div className="rounded-xl shadow-md flex flex-col w-72 md:w-96 mx-auto">
      <Link href={`/produkty/produkt/${slug}`}>
        <Image
          src={image.sourceUrl}
          alt={image.altText}
          width={image.mediaDetails?.width || 450}
          height={image.mediaDetails?.height || 1000}
          quality={50}
          className="object-contain h-80 rounded-t-xl w-full m-auto bg-zinc-200"
        />

        <div className="flex flex-col gap-8 border rounded-b-xl">
          <div>
            <div>{name}</div>
            <div>{price}</div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              addToCart({
                id,
                slug,
                name,
                price,
                image,
                count: 1,
              });
            }}
            className=" self-center bg-zinc-600  w-fit py-6 px-10 text-lg rounded-full text-gray-50 hover: hover:bg-zinc-500 mt-16 mb-4"
          >
            Dodaj do koszyka
          </button>
        </div>
      </Link>
    </div>
  );
};
