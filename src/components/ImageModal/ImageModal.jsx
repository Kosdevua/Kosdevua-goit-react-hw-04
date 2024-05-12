import s from "./ImageModal.module.css";
import { IoMdClose } from "react-icons/io";
import Modal from "react-modal";
const ImageModal = ({ largeImage, desc, closeModal, modalIsOpen }) => {
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0,0,0,0.6)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      display: "flex",
      "justify-content": "center",
    },
  };
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Modal"
      style={customStyles}
    >
      <img className={s.img} src={largeImage} alt={desc} />

      <button
        id="close-btn"
        className={s.btn}
        type="button"
        onClick={closeModal}
      >
        <IoMdClose className={s.svg} color="black" />
      </button>
    </Modal>
  );
};
export default ImageModal;
