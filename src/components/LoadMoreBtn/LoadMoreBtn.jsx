import s from "./LoadMoreBtn.module.css";
const LoadMoreBtn = ({ handleLoadMore }) => {
  return (
    <div className={s.load_more_btn_wrapper}>
      <button
        className={s.load_more_btn}
        onClick={handleLoadMore}
        type="button"
      >
        Load More
      </button>
    </div>
  );
};

export default LoadMoreBtn;

//Кнопка завантаження додаткових зображень

// Компонент LoadMoreBtn рендерить кнопку із текстом "Load more". При натисканні на кнопку має завантажуватися наступна порція зображень і рендеритися разом із попередніми.

// Кнопка має рендеритися лише тоді, коли є які-небудь завантажені зображення.
// Якщо масив зображень порожній, кнопка не рендериться.
