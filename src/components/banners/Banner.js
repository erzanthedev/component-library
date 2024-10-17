import icons from "../banners/icons";

const Banner = () => {
  return (
    <div className="banner banner-error multi">
      <span className="banner-icon">{icons.warning}</span>
      <div className="banner-content">
        <h2 className="banner-title">Congratulations!</h2>
        <p className="banner-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          pariatur, ipsum similique veniam.
        </p>
      </div>
    </div>
  );
};

export default Banner;
