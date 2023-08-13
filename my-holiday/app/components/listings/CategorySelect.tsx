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
  const handleClick = () => {
    onClick(name);
  };

  const textColor = selected ? "text-black" : "text-gray-400";

  return (
    <div
      className={`${textColor} cursor-pointer flex flex-col items-center sm:flex-row sm:items-center sm:space-x-2`}
    >
      <Icon size={25} />
      <div className="text-lg tracking-wider font-semibold">{name}</div>
    </div>
  );
};

export default CategorySelect;
