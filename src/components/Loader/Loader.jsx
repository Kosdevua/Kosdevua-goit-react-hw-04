import s from "./Loader.module.css";
import { Audio } from "react-loader-spinner";
const Loader = () => {
  return (
    <div className={s.loader_wrapper}>
      <Audio
        textAlign="centre"
        height="80"
        width="80"
        radius="9"
        color=" #96eaff"
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
};

export default Loader;

// Індикатор завантаження
//Компонент Loader відображається під галереєю поки відбувається завантаження зображень. Використовуй будь-який готовий компонент, наприклад react-loader-spinner або інший.

// Поки йде завантаження зображень, індикатор завантаження не повинен замінювати галерею, а просто рендеритися під нею. Це буде критичним при додаванні зображень до вже завантажених.
