import { ReactNode } from "react";

interface Props {
  fill?: boolean;
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export const Button = ({ fill, children, onClick, className }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`border  ${
        fill
          ? "border-green-500 bg-green-500 "
          : "border-green-500 text-white hover:text-gray-800"
      } sm:py-1.5 sm:w-full px-3 rounded-2xl  font-semibold text-gray-800 cursor-pointer hover:bg-green-400 hover:border-green-400 active:bg-green-400 active:border-green-400 transition duration-100 ${className}`}
    >
      {children}
    </button>
  );
};
