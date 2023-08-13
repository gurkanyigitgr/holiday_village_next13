"use client";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";

type CounterSelectProps = {
  title: string;
  description: string;
  value: number;
  onChange: (value: number) => void;
};

const CounterSelect: React.FC<CounterSelectProps> = ({
  title,
  description,
  value,
  onChange,
}) => {
  const decrement = () => {
    if (value == 1) return null;
    onChange(value - 1);
  };
  const increment = () => {
    onChange(value + 1);
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center space-y-1 mb-3">
        <div className="font-bold text-xl">{title}</div>
        <div className="text-gray-500 text-sm text-center">{description}</div>
      </div>
      <div className="flex w-1/4 justify-evenly space-x-4 mb-5">
        <div onClick={decrement}>
          <AiOutlineMinusCircle size={30} />
        </div>
        <div className="text-2xl font-bold">{value}</div>
        <div onClick={increment}>
          <AiOutlinePlusCircle size={30} />
        </div>
      </div>
    </div>
  );
};

export default CounterSelect;
