import useGenres from "../../hooks/useGenres";
import style from "./GenreList.module.css";

const GenreList = () => {
  const { genres, error, isLoading } = useGenres();

  return (
    <ul className={style["genre-container"]}>
      {genres.map((genre) => (
        <li key={genre.id} className={style["genre-item"]}>
          {genre.name}
        </li>
      ))}
    </ul>
  );
};

export default GenreList;
