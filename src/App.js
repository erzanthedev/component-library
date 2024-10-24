import TestimonialWithoutImage from "./components/testimonials/TestimonialWithoutImage";
import logoPic from "./components/testimonials/logo.svg";

function App() {
  return (
    <main>
      <TestimonialWithoutImage
        logo={logoPic}
        text="“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”"
        citeName="Mary Anderson"
        citeTitle="Workcation, CTO"
      />
    </main>
  );
}

export default App;
