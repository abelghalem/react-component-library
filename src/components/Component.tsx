import React from "react";

export type ComponentProps = {
  title: string;
};

export default function Component({ title }: ComponentProps) {
  return <h1>{title}</h1>;
}
