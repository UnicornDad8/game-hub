import { GameQuery } from "../../App";
import style from "./GameHeading.module.css";

interface GameHeadingProps {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: GameHeadingProps) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;

  return <h1 className={style["heading"]}>{heading}</h1>;
};

export default GameHeading;
