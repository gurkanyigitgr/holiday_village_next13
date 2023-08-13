"use client";

import { IconType } from "react-icons";
import classNames from "classnames";

type ButtonProps = {
  onSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
  btnLabel: string;
  outline?: boolean;
  icon?: IconType;
};

const Button: React.FC<ButtonProps> = ({
  onSubmit,
  btnLabel,
  outline,
  icon: Icon,
}) => {
  const buttonClasses = classNames(
    "w-full",
    "h-12",
    "cursor-pointer",
    {
      "border border-black": outline,
      "bg-black text-white": !outline,
    },
    "rounded-md",
    "flex",
    "items-center",
    "justify-center"
  );

  return (
    <button onClick={onSubmit} className={buttonClasses}>
      {Icon && <Icon size={25} />}
      {btnLabel}
    </button>
  );
};

export default Button;
