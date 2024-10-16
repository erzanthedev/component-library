import checkCircle from "../../assets/checkCircle.png";

const Banner = () => {
  return (
    <div className="banner">
      <img src={checkCircle} alt="check circle" />
      <div className="banner-content">
        <h6 className="banner-title">Congratulations!</h6>
        <p className="banner-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          pariatur, ipsum similique veniam.
        </p>
      </div>
    </div>
  );
};

export default Banner;
