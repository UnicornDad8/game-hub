import useTrailers from "../../hooks/useTrailers";

interface GameTrailerProps {
  gameId: number;
}

const GameTrailer = ({ gameId }: GameTrailerProps) => {
  const { data, error, isLoading } = useTrailers(gameId);

  if (isLoading) return null;

  if (error) throw error;

  const first = data?.results[0];

  return first ? (
    <video
      src={first.data[480]}
      poster={first.preview}
      controls
      width="640px"
      height="480px"
    />
  ) : null;
};

export default GameTrailer;
