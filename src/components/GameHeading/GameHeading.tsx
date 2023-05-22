import useGenre from "../../hooks/useGenre";
import usePlatform from "../../hooks/usePlatform";
import useGameQueryStore from "../../store";
import style from "./GameHeading.module.css";

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatform(platformId);

  const heading = `Games ${platform?.name || ""} ${genre?.name || ""}`;

  return <h2 className={style["heading"]}>{heading}</h2>;
};

export default GameHeading;
