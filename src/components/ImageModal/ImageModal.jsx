import Modal from "react-modal";

import css from "./ImageModal.module.css";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(000, 000, 000, 0.7)",
  },
  content: {
    borderRadius: "8px",
    width: "50%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    background: "tranporent",
    transform: "translate(-50%, -50%)",
    height: "60%",
  },
};

Modal.setAppElement("#root");

export default function ImageModal({ image, closeModal, modalIsOpen }) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Selected Image"
    >
      <img className={css.image} src={image.src} alt={image.alt} />
    </Modal>
  );
}
