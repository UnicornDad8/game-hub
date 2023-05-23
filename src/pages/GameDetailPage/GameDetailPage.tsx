import { useParams } from "react-router-dom";
import useGame from "../../hooks/useGame";
import ExpandableText from "../../components/ExpandableText";
import GameAttributes from "../../components/GameAttributes";
import style from "./GameDetailPage.module.css";
import GameTrailer from "../../components/GameTrailer";
import GameScreenshots from "../../components/GameScreenshots";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading)
    return (
      <div className="center-spinner">
        <div className="spinner-border" />
      </div>
    );

  if (error || !game) throw error;

  return (
    <div className={style["detail-container"]}>
      <div className={style["detail-left"]}>
        <h2>{game.name}</h2>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameAttributes game={game} />
      </div>
      <div>
        <GameTrailer gameId={game.id} />
        <GameScreenshots gameId={game.id} />
      </div>
    </div>
  );
};

export default GameDetailPage;
