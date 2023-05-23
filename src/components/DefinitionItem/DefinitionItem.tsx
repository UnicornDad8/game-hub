import { ReactNode } from "react";
import style from "./DefinitionItem.module.css";

interface DefinitionTermProps {
  term: string;
  children: ReactNode | ReactNode[];
}

const DefinitionItem = ({ term, children }: DefinitionTermProps) => {
  return (
    <div className={style["definition-container"]}>
      <dt className={style["term"]}>{term}</dt>
      <dd className={style["text"]}>{children}</dd>
    </div>
  );
};

export default DefinitionItem;
