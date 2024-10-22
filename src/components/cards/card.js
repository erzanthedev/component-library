import uploadCloud from "./cloud-upload.svg";

const Card = ({
  icon = <img src={uploadCloud} alt="Upload cloud icon" />,
  children,
  iconBgColor,
}) => {
  const bgColor = {
    backgroundColor: iconBgColor ? iconBgColor : "#3f75fe",
  };
  return (
    <article className="card">
      <div className="card-container">
        <div className="card-wrapper">
          <div className="card-content">
            {icon && (
              <figure className="card-icon" style={bgColor}>
                {icon}
              </figure>
            )}
            <div className="card-details">{children} </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
