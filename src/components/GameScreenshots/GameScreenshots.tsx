import useScreenshots from "../../hooks/useScreenshots";
import style from "./GameScreenshots.module.css";

interface GameScreenshotsProps {
  gameId: number;
}

const GameScreenshots = ({ gameId }: GameScreenshotsProps) => {
  const { data, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <div className={style["screenshots-grid"]}>
      {data?.results.map((file) => (
        <div key={file.id} className={style["sreenshot-box"]}>
          <img src={file.image} />
        </div>
      ))}
    </div>
  );
};

export default GameScreenshots;
