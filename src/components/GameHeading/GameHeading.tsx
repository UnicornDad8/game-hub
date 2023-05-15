import { GameQuery } from "../../App";
import useGenres from "../../hooks/useGenres";
import usePlatforms from "../../hooks/usePlatforms";
import style from "./GameHeading.module.css";

interface GameHeadingProps {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: GameHeadingProps) => {
  const { data: genres } = useGenres();
  const genre = genres?.results.find((g) => g.id === gameQuery.genreId);

  const { data: platforms } = usePlatforms();
  const platform = platforms?.results.find(
    (p) => p.id === gameQuery.platformId
  );

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return <h1 className={style["heading"]}>{heading}</h1>;
};

export default GameHeading;
