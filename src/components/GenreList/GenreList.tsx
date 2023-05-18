import useGenre from "../../hooks/useGenres";
import getCroppedImageUrl from "../../services/image-url";
import useGameQueryStore from "../../store";
import Button from "../Button";
import style from "./GenreList.module.css";

const GenreList = () => {
  const { data, error, isLoading } = useGenre();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

  if (error) return null;

  return (
    <div className={style["genre-container"]}>
      <h2>Genres</h2>
      <ul>
        {isLoading && (
          <div className="center-spinner">
            <div className="spinner-border" />
          </div>
        )}
        {data?.results.map((genre) => (
          <li
            key={genre.id}
            className={
              genre.id === selectedGenreId
                ? `${style["genre-item"]} ${style["highlight"]}`
                : style["genre-item"]
            }
          >
            <Button color="link" onClick={() => setSelectedGenreId(genre.id)}>
              <img
                src={getCroppedImageUrl(genre.image_background)}
                alt={`${genre.name} genre`}
                width={60}
                height={60}
              />
              <p>{genre.name}</p>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GenreList;
