const Banner = ({ status = "neutral", children }) => {
  return <div className={`banner banner-${status} `}>{children}</div>;
};

export default Banner;
