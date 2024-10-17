import icons from "../badges/icons";

const Banner = () => {
  return (
    <div className="banner banner-neutral">
      <span className="banner-icon">{icons.neutral}</span>
      <div className="banner-content">
        <h6 className="banner-title banner-title-neutral">Congratulations!</h6>
        <p className="banner-text banner-text-neutral">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          pariatur, ipsum similique veniam.
        </p>
      </div>
    </div>
  );
};

export default Banner;
