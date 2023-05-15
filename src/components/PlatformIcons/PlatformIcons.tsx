import { ReactElement } from "react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
import { Platform } from "../../hooks/usePlatforms";
import style from "./PlatformIcons.module.css";

interface PlatformIconsProps {
  platforms: Platform[];
}

const PlatformIcons = ({ platforms }: PlatformIconsProps) => {
  const iconMap: { [key: string]: ReactElement<IconType> } = {
    pc: <FaWindows color="#9f9d9d" className={style["icon-margin"]} />,
    playstation: (
      <FaPlaystation color="#9f9d9d" className={style["icon-margin"]} />
    ),
    xbox: <FaXbox color="#9f9d9d" className={style["icon-margin"]} />,
    nintendo: <SiNintendo color="#9f9d9d" className={style["icon-margin"]} />,
    mac: <FaApple color="#9f9d9d" className={style["icon-margin"]} />,
    linux: <FaLinux color="#9f9d9d" className={style["icon-margin"]} />,
    android: <FaAndroid color="#9f9d9d" className={style["icon-margin"]} />,
    ios: <MdPhoneIphone color="#9f9d9d" className={style["icon-margin"]} />,
    web: <BsGlobe color="#9f9d9d" className={style["icon-margin"]} />,
  };

  return (
    <div className={style["icons-box"]}>
      {platforms.map((platform, i) => (
        <div key={i}>{iconMap[platform.slug]}</div>
      ))}
    </div>
  );
};

export default PlatformIcons;
