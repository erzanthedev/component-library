import { createContext } from "react";

const BannerContext = createContext();
export { BannerContext };

const Banner = ({ children, status }) => {
  return (
    <BannerContext.Provider value={status}>
      <div className={`banner banner-${status} `}>{children}</div>
    </BannerContext.Provider>
  );
};

export default Banner;
