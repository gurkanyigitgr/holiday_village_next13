"use client";

import { IconType } from "react-icons";

type CategorySelectProps = {
  name: string;
  icon: IconType;
  selected: boolean;
  onClick: (value: string) => void;
};
const CategorySelect: React.FC<CategorySelectProps> = ({
  name,
  icon: Icon,
  selected,
  onClick,
}) => {
  return (
    <div
      className={`${
        selected ? "text-black " : "text-primaryColor scale-90 animate-pulse"
      } cursor-pointer flex flex-col items-center`}
      onClick={() => onClick(name)}
    >
      <Icon size={25} />
      <div className="text-lg tracking-wider font-semibold">{name}</div>
    </div>
  );
};

export default CategorySelect;
