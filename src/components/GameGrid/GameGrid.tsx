import { Fragment } from "react";
import useGames from "../../hooks/useGames";
import GameCard from "../GameCard";
import GameCardSkeleton from "../GameCardSkeleton";
import InfiniteScroll from "react-infinite-scroll-component";
import style from "./GameGrid.module.css";

const GameGrid = () => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames();

  if (error) <p className={style["error-text"]}>{error.message}</p>;

  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={<div>Loading...</div>}
    >
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
    </InfiniteScroll>
  );
};

export default GameGrid;
