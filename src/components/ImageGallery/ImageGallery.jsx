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

// Галерея зображень

//Компонент ImageGallery  це список карток зображень який створює DOM-елемент наступної структури.

//Галерея повинна рендеритися лише тоді, коли є які-небудь завантажені зображення. Це добра практика не включати елемент li в компонент карточки, а залишити його частиною компонента галереї.
