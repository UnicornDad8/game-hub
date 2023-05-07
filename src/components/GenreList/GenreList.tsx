import useGenre, { Genre } from "../../hooks/useGenres";
import getCroppedImageUrl from "../../services/image-url";
import Button from "../Button";
import style from "./GenreList.module.css";

interface GenreListProps {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: GenreListProps) => {
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
        <li
          key={genre.id}
          className={
            genre.id === selectedGenre?.id
              ? `${style["genre-item"]} ${style["highlight"]}`
              : style["genre-item"]
          }
        >
          <Button color="link" onClick={() => onSelectGenre(genre)}>
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
  );
};

export default GenreList;