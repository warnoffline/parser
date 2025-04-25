import { ReactNode } from "react";

interface Props {
  title: string;
  description: ReactNode;
  actionSlot: ReactNode;
}

export const Card = ({ title, description, actionSlot }: Props) => {
  return (
    <div className="sm:min-h-70 sm:w-60 w-full p-5 rounded-2xl shadow-md bg-gray-800 cursor-pointer hover:scale-105 transition-all duration-300 flex flex-col justify-between">
      <div className="pb-5">
        <p className="font-bold text-white text-xl">{title}</p>
        <div>{description}</div>
      </div>
      <div className="w-full flex sm:flex-col gap-2">{actionSlot}</div>
    </div>
  );
};
