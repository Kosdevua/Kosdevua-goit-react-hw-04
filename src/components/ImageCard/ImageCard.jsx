import s from "./ImageCard.module.css";
const ImageCard = ({ img, openLargeImage }) => {
  return (
    <div className={s.image_card}>
      <img
        onClick={() => openLargeImage(img.urls.regular)}
        className={s.image}
        src={img.urls.small}
        alt={img.alt_description}
      />
    </div>
  );
};

export default ImageCard;
