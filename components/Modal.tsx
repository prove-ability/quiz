import { motion } from "framer-motion";
import Backdrop from "./Modal/Backdrop";
import ModalButton from "./Modal/ModalButton";
import ModalText from "./Modal/ModalText";

interface IProps {
  handleClose: () => void;
  text: string;
}

export default function Modal({ handleClose, text }: IProps) {
  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
        className="modal orange-gradient z-10"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <ModalText text={text} />
        <ModalButton onClick={handleClose} label="Close" />
      </motion.div>
    </Backdrop>
  );
}
