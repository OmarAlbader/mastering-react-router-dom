import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  width?: "w-full" | "w-fit";
}

const Button = ({
  children,
  className = "",
  width = "w-full",
  ...rest
}: IProps) => {
  return (
    <button
      className={`${className} ${width} rounded-lg bg-[#149eca] px-3 py-3 font-medium text-white duration-200`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
