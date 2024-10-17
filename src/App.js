import Banner from "./components/banners/index";
import { createContext } from "react";

const BannerContext = createContext();
export { BannerContext };

function App() {
  return (
    <main>
      <BannerContext.Provider value="neutral">
        <Banner>
          <Banner.Icon />
          <Banner.Title>Congratulations!</Banner.Title>
          <Banner.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            pariatur, ipsum similique veniam.
          </Banner.Text>
        </Banner>
      </BannerContext.Provider>
    </main>
  );
}

export default App;
