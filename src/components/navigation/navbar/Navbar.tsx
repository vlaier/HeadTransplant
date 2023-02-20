import { Cartbar } from '../../cart/bar/Cartbar';
import { Searchbar } from '../searchbar/base/Searchbar';
import Link from 'next/link';
import { INavbar } from '..';

export const Navbar: React.FC<INavbar> = ({ pages }) => {
  return (
    <div className="bg-zinc-300 flex items-center py-4 justify-around ">
      <div className="flex gap-4">
        {pages.map((page, index) => {
          return (
            <Link href={page.href} key={`${page.name}-${index}`}>
              {page.name}
            </Link>
          );
        })}
      </div>
      <Searchbar />
      <Link href="/koszyk">
        <Cartbar />
      </Link>
    </div>
  );
};
