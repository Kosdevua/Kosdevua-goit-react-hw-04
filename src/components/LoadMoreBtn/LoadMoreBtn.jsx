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
