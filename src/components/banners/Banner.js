import icons from "../banners/icons";

const Banner = ({ variant = "multi", status = "neutral", title, text }) => {
  return (
    <div className={`banner banner-${status} ${variant}`}>
      <span className="banner-icon">{icons[status]}</span>
      <div className="banner-content">
        <h2 className="banner-title">{title}</h2>
        <p className="banner-text">{text}</p>
      </div>
    </div>
  );
};

export default Banner;
