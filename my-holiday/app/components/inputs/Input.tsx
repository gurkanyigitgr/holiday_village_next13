"use client";
import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";
type InputProps = {
  type: string;
  id: string;
  placeholder: string;
  required: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
};
const Input: React.FC<InputProps> = ({
  type,
  id,
  placeholder,
  register,
  required,
  errors,
}) => {
  return (
    <div className="mb-3">
      <input
        className={`${
          errors[id]
            ? "border border-red-500 animate-pulse"
            : "border border-gray-300"
        } w-full h-12 px-3 text-lg outline-none rounded-md`}
        {...register(id, { required })}
        type={type}
        placeholder={placeholder}
        id={id}
      />
    </div>
  );
};

export default Input;
