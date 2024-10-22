import uploadCloud from "./cloud-upload.svg";

const Card = ({
  icon = <img src={uploadCloud} alt="Upload cloud icon" />,
  children,
}) => {
  return (
    <article className="card">
      <div className="card-container">
        <div className="card-wrapper">
          <div className="card-content">
            {icon && <figure className="card-icon">{icon}</figure>}
            <div className="card-details">{children} </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
