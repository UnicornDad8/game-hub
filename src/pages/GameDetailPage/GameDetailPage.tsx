import { useParams } from "react-router-dom";
import useGame from "../../hooks/useGame";
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
      <p>{game.description_raw}</p>
    </div>
  );
};

export default GameDetailPage;
