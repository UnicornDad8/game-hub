import { FC } from "react";
import useGames, { Platform } from "../../hooks/useGames";
import GameCard from "../GameCard";
import { SWRConfig } from "swr";
import GameCardSkeleton from "../GameCardSkeleton";
import { GameQuery } from "../../App";
import style from "./GameGrid.module.css";

interface GameGridProps {
  gameQuery: GameQuery;
}

const GameGrid: FC = ({ gameQuery }: GameGridProps) => {
  const { data, error, isLoading } = useGames(gameQuery);

  return (
    <SWRConfig
      value={{
        data,
        suspense: true,
      }}
    >
      <div>
        {error && <p>{error}</p>}

        <ul className={style["game-card__grid"]}>
          {data.map((game, i) => (
            <li key={game.id} className={style[`game-${i + 1}`]}>
              <GameCard game={game} />
            </li>
          ))}
          {isLoading && <GameCardSkeleton />}
        </ul>
      </div>
    </SWRConfig>
  );
};

export default GameGrid;
