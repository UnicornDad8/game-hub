import useGames from "../../hooks/useGames";
import GameCard from "../GameCard";
import GameCardSkeleton from "../GameCardSkeleton";
import { GameQuery } from "../../App";
import style from "./GameGrid.module.css";

interface GameGridProps {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: GameGridProps) => {
  const { data, error, isLoading } = useGames(gameQuery);

  if (error) <p className={style["error-text"]}>{error.message}</p>;

  return (
    <ul className={style["game-card__grid"]}>
      {data?.results.map((game, i) => (
        <li key={game.id} className={style[`game-${i + 1}`]}>
          <GameCard game={game} />
        </li>
      ))}
      {isLoading && <GameCardSkeleton />}
    </ul>
  );
};

export default GameGrid;
