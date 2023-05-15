import { FC } from "react";
import Skeleton from "react-loading-skeleton";
import style from "./GameCardSkeleton.module.css";

const GameCardSkeleton: FC = () => {
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <div className={style["card-skeleton__grid"]}>
      {skeletons.map((sk, i) => (
        <div key={i} className={style["card-skeleton"]}>
          <Skeleton height={280} width={300} style={{ borderRadius: 10 }} />
          <Skeleton
            height={30}
            width={300}
            count={4}
            style={{ marginTop: 8, borderRadius: 10 }}
          />
        </div>
      ))}
    </div>
  );
};

export default GameCardSkeleton;
