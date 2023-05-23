import { useParams } from "react-router-dom";
import useGame from "../../hooks/useGame";
import ExpandableText from "../../components/ExpandableText";
import GameAttributes from "../../components/GameAttributes/GameAttributes";
import style from "./GameDetailPage.module.css";

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
      <h2>{game.name}</h2>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game} />
    </div>
  );
};

export default GameDetailPage;
