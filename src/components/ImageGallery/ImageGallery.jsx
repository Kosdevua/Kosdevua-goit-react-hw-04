import s from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images, openLargeImage }) => {
  return (
    <ul className={s.image_gallery_wrapper}>
      {images.map((img) => {
        return (
          <li className={s.image_gallery_item} key={img.id}>
            <ImageCard openLargeImage={openLargeImage} img={img} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
