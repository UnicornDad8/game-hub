import { useState } from "react";
import style from "./PlatformSelector.module.css";
import { FaChevronDown } from "react-icons/fa";
import usePlatforms from "../../hooks/usePlatforms";
import { Platform } from "../../hooks/useGames";

interface PlatformSelectorProps {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({
  onSelectPlatform,
  selectedPlatform,
}: PlatformSelectorProps) => {
  const { data, error } = usePlatforms();
  const [isOpen, setIsOpen] = useState(false);

  const toggling = () => setIsOpen(!isOpen);

  if (error) return null;

  return (
    <div className={style["dropdown-container"]}>
      <div className={style["dropdown-header"]} onClick={toggling}>
        <p>{selectedPlatform?.name || "Platforms"}</p>
        <FaChevronDown className={style["icon-arrow"]} />
      </div>
      {isOpen && (
        <ul className={style["dropdown-list"]}>
          {data?.results.map((platform) => (
            <li
              key={platform.id}
              className={style["list-item"]}
              onClick={() => {
                onSelectPlatform(platform);
                setIsOpen(false);
              }}
            >
              {platform.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PlatformSelector;
