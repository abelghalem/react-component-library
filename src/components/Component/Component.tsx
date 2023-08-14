import React from "react";

export type ComponentProps = {
  title: string;
};

export default function Component({ title }: ComponentProps) {
  return (
    <div className="grid w-[400px] h-[200px] grid-cols-2">
      <div className="bg-green-500 flex justify-center items-center rounded-l-xl">
        {title}
      </div>
      <div className="bg-red-500 flex justify-center items-center rounded-r-xl">
        {title}
      </div>
    </div>
  );
}
