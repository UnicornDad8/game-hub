import useGenre from "../../hooks/useGenres";
import style from "./GenreList.module.css";

const GenreList = () => {
  const { data, error, isLoading } = useGenre();

  return (
    <ul className={style["genre-container"]}>
      {data.map((genre) => (
        <li key={genre.id} className={style["genre-item"]}>
          {genre.name}
        </li>
      ))}
    </ul>
  );
};

export default GenreList;
