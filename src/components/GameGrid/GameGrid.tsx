import { Fragment } from "react";
import useGames from "../../hooks/useGames";
import GameCard from "../GameCard";
import GameCardSkeleton from "../GameCardSkeleton";
import { GameQuery } from "../../App";
import style from "./GameGrid.module.css";

interface GameGridProps {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: GameGridProps) => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);

  if (error) <p className={style["error-text"]}>{error.message}</p>;

  return (
    <Fragment>
      <ul className={style["game-card__grid"]}>
        {data?.pages.map((page, i) => (
          <Fragment key={i}>
            {page.results.map((game, i) => (
              <li key={game.id} className={style[`game-${i + 1}`]}>
                <GameCard game={game} />
              </li>
            ))}
          </Fragment>
        ))}
        {isLoading && <GameCardSkeleton />}
      </ul>
      {hasNextPage && (
        <button
          className={`${style["btn"]} ${style["btn-primary"]} ${
            style["btn-margin"]
          } ${isFetchingNextPage && style["btn-opacity"]}`}
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
        >
          {isFetchingNextPage ? (
            <div className={style["stage"]}>
              <div className={style["dot-elastic"]}></div>
            </div>
          ) : (
            "Load More"
          )}
        </button>
      )}
    </Fragment>
  );
};

export default GameGrid;
