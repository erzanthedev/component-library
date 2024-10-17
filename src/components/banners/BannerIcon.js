import icons from "./icons";

const BannerIcon = ({ status }) => {
  return <span className="banner-icon">{icons[status]}</span>;
};

export default BannerIcon;
