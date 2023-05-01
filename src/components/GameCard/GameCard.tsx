import { Game } from "../../hooks/useGames";
import style from "./GameCard.module.css";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <div className={style["game-card"]}>
      <div className={style["game-card__image"]}>
        <img src={game.background_image} />
      </div>
      <div className={style["game-card__body"]}>
        <header>{game.name}</header>
      </div>
    </div>
  );
};

export default GameCard;
