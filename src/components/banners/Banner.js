import icons from "../badges/icons";

const Banner = () => {
  return (
    <div className="banner banner-warning">
      <span className="banner-icon">{icons.warning}</span>
      <div className="banner-content">
        <h6 className="banner-title">Congratulations!</h6>
        <p className="banner-text ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          pariatur, ipsum similique veniam.
        </p>
      </div>
    </div>
  );
};

export default Banner;
