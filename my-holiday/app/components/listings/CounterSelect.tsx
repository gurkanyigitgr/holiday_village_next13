"use client";
import { useState } from "react";

type CounterSelectProps = {
  title: string;
  value: number;
  onChange: (value: number) => void;
};

const CounterSelect: React.FC<CounterSelectProps> = ({
  title,
  value,
  onChange,
}) => {
  const [inputVal, setInputVal] = useState(value.toString());

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value);
  };

  const handleInputBlur = () => {
    const parsedValue = parseInt(inputVal);
    if (!isNaN(parsedValue)) {
      onChange(parsedValue);
    } else {
      setInputVal(value.toString());
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="space-y-1 mb-3">
        <div className="font-bold">{title}</div>
      </div>
      <div className=" space-x-4 mb-5">
        <div className="text-lg font-bold">
          <input
            className="text-center p-1 rounded-md"
            type="number"
            value={inputVal}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
          />
        </div>
      </div>
    </div>
  );
};

export default CounterSelect;
