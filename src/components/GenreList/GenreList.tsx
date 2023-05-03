import useGenre from "../../hooks/useGenres";
import getCroppedImageUrl from "../../services/image-url";
import style from "./GenreList.module.css";

const GenreList = () => {
  const { data, error, isLoading } = useGenre();

  if (error) return null;

  return (
    <ul className={style["genre-container"]}>
      {isLoading && (
        <div className="center-spinner">
          <div className="spinner-border" />
        </div>
      )}
      {data.map((genre) => (
        <li key={genre.id} className={style["genre-item"]}>
          <img
            src={getCroppedImageUrl(genre.image_background)}
            alt={`${genre.name} genre`}
            width={60}
            height={60}
          />
          <p>{genre.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default GenreList;
