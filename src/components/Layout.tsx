import React, { ReactNode } from 'react';
import { Navbar } from './navigation/navbar/Navbar';
import { mockNavbarProps } from './navigation/navbar/Navbar.mocks';
export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar {...mockNavbarProps.base} />
      <main className="min-h-screen min-w-screen md:px-32 bg-gray-100">
        {children}
      </main>
    </>
  );
};
