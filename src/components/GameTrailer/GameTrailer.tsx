import useTrailers from "../../hooks/useTrailers";
import style from "./GameTrailer.module.css";

interface GameTrailerProps {
  gameId: number;
}

const GameTrailer = ({ gameId }: GameTrailerProps) => {
  const { data, error, isLoading } = useTrailers(gameId);

  if (isLoading) return null;

  if (error) throw error;

  const first = data?.results[0];

  return first ? (
    <div className={style["trailer-container"]}>
      <video src={first.data[480]} poster={first.preview} controls />
    </div>
  ) : null;
};

export default GameTrailer;
