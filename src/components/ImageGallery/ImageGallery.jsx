import ImageCard from "../ImageCard/ImageCard";

import css from "../ImageGallery/ImageGallery.module.css";

export default function ImageGallery({ images, openModal, setSelectedImage }) {
  return (
    <ul className={css.imageGallery}>
      {images.map((image) => (
        <li key={image.id} className={css.image}>
          <ImageCard
            src={image.urls}
            alt={image.alt_description}
            openModal={openModal}
            setSelectedImage={setSelectedImage}
          />
        </li>
      ))}
    </ul>
  );
}
