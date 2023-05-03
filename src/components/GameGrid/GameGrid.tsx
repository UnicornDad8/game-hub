import { FC } from "react";
import useGames from "../../hooks/useGames";
import GameCard from "../GameCard";
import { SWRConfig } from "swr";
import GameCardSkeleton from "../GameCardSkeleton";
import { Genre } from "../../hooks/useGenres";
import style from "./GameGrid.module.css";

interface GameGridProps {
  selectedGenre: Genre | null;
}

const GameGrid: FC = ({ selectedGenre }: GameGridProps) => {
  const { data, error, isLoading } = useGames(selectedGenre);

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
