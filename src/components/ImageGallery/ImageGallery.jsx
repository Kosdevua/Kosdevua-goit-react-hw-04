import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images }) => {
  // console.log(images);
  return (
    <ul>
      <li>
        <ImageCard />
      </li>
    </ul>
  );
};

export default ImageGallery;

// Галерея зображень

//Компонент ImageGallery – це список карток зображень який створює DOM-елемент наступної структури.

//Галерея повинна рендеритися лише тоді, коли є які-небудь завантажені зображення. Це добра практика не включати елемент li в компонент карточки, а залишити його частиною компонента галереї.
