import css from "../LoadMoreBtn/LoadMoreBth.module.css";

export default function LoadMoreBtn({ handleLoadMore }) {
  return (
    <div className={css.butCont}>
      <button className={css.button} onClick={handleLoadMore}>
        Load more
      </button>
    </div>
  );
}
