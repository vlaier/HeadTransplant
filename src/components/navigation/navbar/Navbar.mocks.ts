import { INavbar } from '..';

const base: INavbar = {
  pages: [
    { name: 'Main', href: '/' },
    { name: 'Produkty', href: '/produkty' },
  ],
};

export const mockNavbarProps = {
  base,
};
