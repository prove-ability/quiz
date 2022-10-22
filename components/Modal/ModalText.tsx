import React from "react";

interface IProps {
  text: string;
}

export default function ModalText({ text }: IProps) {
  return (
    <div className="modal-text">
      <h3>{text}</h3>
      <h5>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius laboriosam
        labore, totam expedita voluptates tempore asperiores sequi, alias cum
        veritatis, minima dolor iste similique eos id. Porro, culpa? Officiis,
        placeat?
      </h5>
    </div>
  );
}
