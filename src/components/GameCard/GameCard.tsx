import Game from "../../entities/Game";
import PlatformIcons from "../PlatformIcons";
import CriticScore from "../CriticScore";
import getCroppedImageUrl from "../../services/image-url";
import Emoji from "../Emoji";
import style from "./GameCard.module.css";
import { Link } from "react-router-dom";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Link to={"/games/" + game.slug}>
      <div className={style["game-card"]}>
        <div className={style["game-card__image"]}>
          <img src={getCroppedImageUrl(game.background_image)} />
        </div>
        <div className={style["game-card__body"]}>
          <div className={style["platform-icons__box"]}>
            <PlatformIcons
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </div>
          <header>
            {game.name}
            <Emoji rating={game.rating_top} />
          </header>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;
