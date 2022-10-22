import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  onClick: () => void;
}

export default function ModalBackdrop({ children, onClick }: Props) {
  return (
    <motion.div
      onClick={onClick}
      className="absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center overflow-y-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
}
