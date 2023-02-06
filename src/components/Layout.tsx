import React, { ReactNode } from "react";
import { Navbar } from "./Navbar";
export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen min-w-screen px-32  bg-gray-100">
        {children}
      </main>
    </>
  );
};
