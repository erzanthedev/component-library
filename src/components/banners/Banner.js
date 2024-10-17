const Banner = ({ variant = "multi", status = "neutral", children }) => {
  return <div className={`banner banner-${status} ${variant}`}>{children}</div>;
};

export default Banner;
