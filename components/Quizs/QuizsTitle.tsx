import React from "react";

interface Props {
  title: string;
}

export default function QuizsTitle({ title }: Props) {
  return <h1 className="text-4xl font-bold text-center">{title}</h1>;
}
