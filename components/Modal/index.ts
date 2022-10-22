import ModalBackdrop from "./ModalBackdrop";
import ModalButton from "./ModalButton";
import ModalMain from "./ModalMain";
import ModalText from "./ModalText";

const Modal = Object.assign(ModalMain, {
  Backdrop: ModalBackdrop,
  Button: ModalButton,
  Text: ModalText,
});

export default Modal;
