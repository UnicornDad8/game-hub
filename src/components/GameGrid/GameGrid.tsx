import useGames from "../../hooks/useGames";
import GameCard from "../GameCard";
import style from "./GameGrid.module.css";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <div>
      {error && <p>{error}</p>}
      <ul className={style["game-card__grid"]}>
        {games.map((game, i) => (
          <li key={game.id} className={style[`game-${i + 1}`]}>
            <GameCard game={game} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameGrid;
