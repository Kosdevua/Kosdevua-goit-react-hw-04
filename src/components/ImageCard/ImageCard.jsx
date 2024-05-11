import s from "./ImageCard.module.css";
const ImageCard = ({ img, openLargeImage }) => {
  // console.log(img.urls.small);
  // console.log(img.alt_description);
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

// Картка зображення
// Компонент ImageCard рендериться в елементі галереї. Створює DOM-елемент наступної структури.
{
  /* <div>
<img src="" alt="" />
</div> */
}
