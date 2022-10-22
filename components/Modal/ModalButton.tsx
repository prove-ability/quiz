import React from "react";
import { motion } from "framer-motion";

interface Props {
  label: string;
  onClick: () => void;
}

export default function ModalButton({ label, onClick }: Props) {
  return (
    <motion.button
      className="relative bottom-[1.5rem] p-[0.3rem] min-h-[3rem] m-auto mb-0 bg-[#101315] text-[#eee]"
      type="button"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {label}
    </motion.button>
  );
}

// #101315
// #eeeeee
