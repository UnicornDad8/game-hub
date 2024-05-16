import { FC } from "react";
import Skeleton from "react-loading-skeleton";
import style from "./GameCardSkeleton.module.css";

const GameCardSkeleton: FC = () => {
  const cards = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {cards.map((c, i) => (
        <div className={style["card-skeleton__grid"]} key={i}>
          <div className={style["card-skeleton"]}>
            <Skeleton height={280} width={340} style={{ borderRadius: 10 }} />
            <Skeleton
              height={30}
              width={340}
              count={4}
              style={{ marginTop: 8, borderRadius: 10 }}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default GameCardSkeleton;
