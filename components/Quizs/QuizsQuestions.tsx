import React from "react";

interface Props {
  questions: string;
}

export default function QuizsQuestions({ questions }: Props) {
  return <h2>{questions}</h2>;
}
