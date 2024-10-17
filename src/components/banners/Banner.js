import { useContext } from "react";
import { BannerContext } from "../../App";

const Banner = ({ children }) => {
  const status = useContext(BannerContext);
  return <div className={`banner banner-${status} `}>{children}</div>;
};

export default Banner;
