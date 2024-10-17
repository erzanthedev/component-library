import icons from "./icons";
import { useContext } from "react";
import { BannerContext } from "./Banner";

const BannerIcon = () => {
  const status = useContext(BannerContext);
  return <span className="banner-icon">{icons[status]}</span>;
};

export default BannerIcon;
