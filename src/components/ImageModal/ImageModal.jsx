import s from "./ImageModal.module.css";
import { IoMdClose } from "react-icons/io";
import Modal from "react-modal";
export const ImageModal = ({ largeImage, desc, closeModal, modalIsOpen }) => {
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

// const ImageModal = ({ largeImage }) => {
//   return (
//     <div>
//       <img src={largeImage} alt="modal_image" />
//     </div>
//   );
// };

// export default ImageModal;

// Модальне вікно

// Компонент ImageModal повинен рендеритися всередині компоненту App та отримувати через пропси з App всі необхідні дані та функції.

// Під час натискання на зображення галереї повинно відкриватися модальне вікно ImageModal з темним фоном, яке відображатиме зображення у великому форматі. Модальне вікно має бути налаштовано таким чином, щоб воно закривалося при натисканні на клавішу ESC або при кліку за його межами. Для реалізації функціональності модального вікна використовуй бібліотеку React Modal. https://github.com/reactjs/react-modal?tab=readme-ov-file#examples
