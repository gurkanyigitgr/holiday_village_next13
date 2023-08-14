"use client";
import { FaUmbrellaBeach } from "react-icons/fa";
import { LuHotel } from "react-icons/lu";
import CategoriesItem from "./CategoriesItem";
import { useSearchParams } from "next/navigation";

export const categories = [
  {
    name: "Village",
    icon: FaUmbrellaBeach,
  },
  {
    name: "Camp",
    icon: LuHotel,
  },
  {
    name: "Hotel",
    icon: FaUmbrellaBeach,
  },
  {
    name: "Villa",
    icon: LuHotel,
  },
];

const Categories = () => {
  const params = useSearchParams();
  const urlItem = params?.get("category");

  return (
    <div className="flex items-center space-x-28">
      {categories.map((cat, i) => (
        <CategoriesItem
          key={i}
          name={cat.name}
          icon={cat.icon}
          selected={urlItem == cat.name ? true : false}
        />
      ))}
    </div>
  );
};

export default Categories;
