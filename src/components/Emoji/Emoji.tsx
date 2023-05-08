import { ImgHTMLAttributes } from "react";
import bullsEye from "../../assets/bulls-eye.webp";
import thumbsUp from "../../assets/thumbs-up.webp";
import meh from "../../assets/meh.webp";

import style from "./Emoji.module.css";

interface EmojiProps {
  rating: number;
}

const Emoji = ({ rating }: EmojiProps) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImgHTMLAttributes<HTMLImageElement> } = {
    3: { src: meh, alt: "meh" },
    4: { src: thumbsUp, alt: "recomended" },
    5: { src: bullsEye, alt: "exceptional" },
  };

  return (
    <div className={style["emoji-box"]}>
      <img {...emojiMap[rating]} />
    </div>
  );
};

export default Emoji;
