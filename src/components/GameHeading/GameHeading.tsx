import { GameQuery } from "../../App";
import useGenre from "../../hooks/useGenre";
import usePlatform from "../../hooks/usePlatform";
import style from "./GameHeading.module.css";

interface GameHeadingProps {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: GameHeadingProps) => {
  const genre = useGenre(gameQuery.genreId);
  const platform = usePlatform(gameQuery.platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return <h1 className={style["heading"]}>{heading}</h1>;
};

export default GameHeading;
