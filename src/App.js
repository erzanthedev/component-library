import Banner from "./components/banners/Banner";
import BannerIcon from "./components/banners/BannerIcon";
import BannerTitle from "./components/banners/BannerTitle";
import BannerText from "./components/banners/BannerText";
function App() {
  return (
    <main>
      {/* <Banner */}
      {/*   variant="multi" */}
      {/*   status="success" */}
      {/*   title="Congratulations!" */}
      {/*   text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam." */}
      {/* /> */}

      <Banner status="success" variant="multi">
        <BannerIcon status="success" />
        <BannerTitle>Congratulations!</BannerTitle>
        <BannerText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          pariatur, ipsum similique veniam.
        </BannerText>
      </Banner>
    </main>
  );
}

export default App;
