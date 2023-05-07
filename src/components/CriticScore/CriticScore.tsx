import style from "./CriticScore.module.css";

interface CriticScoreProps {
  score: number;
}

const CriticScore = ({ score }: CriticScoreProps) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "red";

  return (
    <div className={`${style["badge"]} ${style[`${color}`]}`}>
      {score || "0"}
    </div>
  );
};

export default CriticScore;
