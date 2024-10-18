import uploadIcon from "./cloud-upload.svg";

const Card = () => {
  return (
    <article className="card">
      <div className="card-wrapper">
        <div className="card-content">
          <figure className="card-icon">
            <img src={uploadIcon} alt="cloud upload icon for easy deployment" />
          </figure>
          <div className="card-details">
            <h2 className="card-title">Easy Deployment</h2>
            <p className="card-description">
              Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
              magna sit morbi lobortis.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
