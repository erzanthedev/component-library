import uploadIcon from "./cloud-upload.svg";
const Card = () => {
  return (
    <div className="card">
      <div className="card-wrapper">
        <div className="card-content">
          <div className="brand-icon">
            <img src={uploadIcon} alt="cloud upload " />
          </div>
          <div className="content">
            <h2 className="content-title">Easy Deployment</h2>
            <p className="content-description">
              Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
              magna sit morbi lobortis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
