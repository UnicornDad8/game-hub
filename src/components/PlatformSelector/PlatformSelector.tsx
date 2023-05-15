import { useState } from "react";
import style from "./PlatformSelector.module.css";
import { FaChevronDown } from "react-icons/fa";
import usePlatforms, { Platform } from "../../hooks/usePlatforms";
import usePlatform from "../../hooks/usePlatform";

interface PlatformSelectorProps {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatformId?: number;
}

const PlatformSelector = ({
  onSelectPlatform,
  selectedPlatformId,
}: PlatformSelectorProps) => {
  const { data, error } = usePlatforms();
  const selectedPlatform = usePlatform(selectedPlatformId);

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
