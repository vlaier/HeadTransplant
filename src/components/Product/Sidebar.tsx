import React from "react";
import { Filter } from "../Products/Components";
export interface SidebarProperties {
  filters?: FiltersObject;
}
export interface FiltersObject {
  ids: number[];
}
export const Sidebar = ({ options }: { options: SidebarProperties }) => {
  return (
    <div className=" mt-8  w-80 shadow-lg border  rounded-xl py-8 px-6 rounded-b-md h-fit">
      <Filter id={18} />
    </div>
  );
};
