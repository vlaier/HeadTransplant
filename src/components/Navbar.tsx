import Link from "next/link";
import React from "react";
import { CartBar } from "./Cart/CartBar";
import { Searchbar } from "./Searchbar";

export const Navbar = () => {
  var test = "test";
  return (
    <div className=" bg-zinc-300 flex gap-4 items-center py-4 justify-around ">
      <Link href="/">Main</Link>
      <Link href="/produkty">Produkty</Link>
      <Link href="/produkty/infinite">Infinite</Link>
      <Searchbar />
      <Link href="/koszyk">
        <CartBar />
      </Link>
    </div>
  );
};
