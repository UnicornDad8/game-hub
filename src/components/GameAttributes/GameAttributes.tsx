import { Game } from "../../entities/Game";
import DefinitionItem from "../DefinitionItem";
import CriticScore from "../CriticScore";
import style from "./GameAttributes.module.css";

interface GameAttributesProps {
  game: Game;
}

const GameAttributes = ({ game }: GameAttributesProps) => {
  return (
    <div className={style["definition-grid"]}>
      <DefinitionItem term="Platforms">
        {game.parent_platforms?.map(({ platform }) => (
          <p key={platform.id}>{platform.name}</p>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Metascore">
        <CriticScore score={game.metacritic} />
      </DefinitionItem>
      <DefinitionItem term="Genres">
        {game.genres.map((genre) => (
          <p key={genre.id}>{genre.name}</p>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Publishers">
        {game.publishers?.map((publisher) => (
          <p key={publisher.id}>{publisher.name}</p>
        ))}
      </DefinitionItem>
    </div>
  );
};

export default GameAttributes;
