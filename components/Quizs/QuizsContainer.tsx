import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function QuizsContainer({ children }: Props) {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-xl flex flex-col gap-4 justify-center items-center">
        {children}
      </div>
    </div>
  );
}
