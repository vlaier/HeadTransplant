import Link from "next/link";
import React from "react";
import { CartBar } from "./Cart/CartBar";
import { SearchBar } from "./Search";

export const Navbar = () => {
  var test = "test";
  return (
    <div className=" bg-zinc-300 flex gap-4 items-center py-4 justify-around ">
      <Link href="/">Main</Link>
      <Link href="/produkty">Produkty</Link>
      <Link href="/produkty/infinite">Infinite</Link>
      <SearchBar />
      <Link href="/koszyk">
        <CartBar />
      </Link>
    </div>
  );
};
