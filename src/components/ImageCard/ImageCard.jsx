import css from "./ImageCard.module.css";

export default function ImageCard({ src, alt, openModal, setSelectedImage }) {
  const handleClick = () => {
    openModal();
    setSelectedImage({ src: src.regular, alt: alt });
  };
  return (
    <div onClick={handleClick}>
      <img className={css.image} src={src.small} alt={alt} />
    </div>
  );
}
