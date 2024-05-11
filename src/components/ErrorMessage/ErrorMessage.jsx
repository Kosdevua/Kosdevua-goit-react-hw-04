import s from "./ErrorMessage.module.css";

import { iziToast } from "izitoast";
const ErrorMessage = () => {
  console.log(iziToast);
  return (
    <div className={s.error_message_wrapper}>
      <p className={s.error_message}>
        Whoops, something went wrong! Please try reloading this page!
      </p>
    </div>
  );
};

export default ErrorMessage;

//Повідомлення про помилку

// Компонент ErrorMessage рендериться замість галереї зображень у випадку помилки HTTP-запиту. Достатньо, щоб це було текстове повідомлення.
