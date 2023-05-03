import useGenre, { Genre } from "../../hooks/useGenres";
import getCroppedImageUrl from "../../services/image-url";
import Button from "../Button";
import style from "./GenreList.module.css";

interface GenreListProps {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: GenreListProps) => {
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
          <Button color="link" onClick={() => onSelectGenre(genre)}>
            <img
              src={getCroppedImageUrl(genre.image_background)}
              alt={`${genre.name} genre`}
              width={60}
              height={60}
            />
            {genre.name}
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default GenreList;
