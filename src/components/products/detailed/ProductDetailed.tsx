import Image from 'next/image';
import { IProductDetailed } from '..';
export const ProductDetailed: React.FC<IProductDetailed> = (props) => {
  const { name, image, description, imageArray = [] } = { ...props };

  return (
    <div className="grid grid-cols-2">
      <div className="w-full">
        <Image
          src={image.sourceUrl}
          alt={image.altText}
          width={200}
          height={10}
          className="object-contain w-full max-h-96"
        />
      </div>
      <div className=" ">{description}</div>
    </div>
  );
};
