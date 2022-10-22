import { motion } from "framer-motion";
import Modal from ".";

interface Props {
  handleClose: () => void;
  text: string;
}

export default function ModalMain({ handleClose, text }: Props) {
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
    <Modal.Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
        className="modal orange-gradient z-10"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Modal.Text text={text} />
        <Modal.Button onClick={handleClose} label="Close" />
      </motion.div>
    </Modal.Backdrop>
  );
}
