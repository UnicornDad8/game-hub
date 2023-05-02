import { FC } from "react";
import useGames from "../../hooks/useGames";
import GameCard from "../GameCard";
import { BareFetcher, SWRConfig } from "swr";
import GameCardSkeleton from "../GameCardSkeleton";
import style from "./GameGrid.module.css";

const GameGrid: FC = () => {
  const { data, error, isLoading } = useGames();

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
