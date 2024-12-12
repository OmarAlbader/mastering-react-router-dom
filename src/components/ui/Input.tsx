import React, { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ ...rest }: IProps) => {
  return (
    <input
      className="text-md w-full rounded-lg border-[1px] border-gray-300 bg-transparent px-3 py-3 shadow-md focus:border-[#149eca] focus:outline-none focus:ring-1 focus:ring-[#149eca]"
      {...rest}
    />
  );
};

export default Input;
