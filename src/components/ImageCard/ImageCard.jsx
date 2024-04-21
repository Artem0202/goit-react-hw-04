import css from "./ImageCard.module.css";

export default function ImageCard({
  data: { alt_description, urls },
  onOpenModal,
}) {
  return (
    <button
      className={css.button}
      onClick={() => {
        onOpenModal(urls.regular);
      }}
    >
      <img className={css.img} src={urls.small} alt={alt_description} />
    </button>
  );
}
