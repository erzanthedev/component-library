import uploadIcon from "./cloud-upload.svg";

const Card = ({ icon, title, description }) => {
  return (
    <article className="card">
      <div className="card-container">
        <div className="card-wrapper">
          <div className="card-content">
            <figure className="card-icon">{icon}</figure>
            <div className="card-details">
              <h2 className="card-title">{title}</h2>
              <p className="card-description">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
