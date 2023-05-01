import { Game } from "../../hooks/useGames";
import PlatformIcons from "../PlatformIcons";
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
        <PlatformIcons
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </div>
    </div>
  );
};

export default GameCard;
