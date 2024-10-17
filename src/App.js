import Banner from "./components/banners/index";
function App() {
  return (
    <main>
      <Banner status="warning" variant="multi">
        <Banner.Icon status="warning" />
        <Banner.Title>Congratulations!</Banner.Title>
        <Banner.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          pariatur, ipsum similique veniam.
        </Banner.Text>
      </Banner>
    </main>
  );
}

export default App;
