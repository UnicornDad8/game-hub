import { useState } from "react";
import style from "./ExpandableText.module.css";

interface ExpandableTextProps {
  children: string;
}

const ExpandableText = ({ children }: ExpandableTextProps) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if (!children) return null;

  if (children.length <= limit) return <p>{children}</p>;

  const summary = expanded ? children : children.substring(0, limit) + "...";

  return (
    <div className={style["expandable-container"]}>
      <p className={style["expandable-text"]}>
        {summary}
        <button
          className={style["btn-expandable"]}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Show Less" : "Read More"}
        </button>
      </p>
    </div>
  );
};

export default ExpandableText;
