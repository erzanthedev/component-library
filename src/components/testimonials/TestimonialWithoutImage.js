import logo from "./logo.svg";
const TestimonialWithoutImage = () => {
  return (
    <div className="testimonial testimonial--no-image">
      <div className="testimonial__wrapper">
        <div className="testimonial__content">
          <div className="testimonial__leading-content">
            <img
              src={logo}
              className="testimonial__logo"
              alt="a house with a coconut tree with text workcation"
            />
            <p className="testimonial__text">
              “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              expedita voluptas culpa sapiente alias molestiae. Numquam corrupti
              in laborum sed rerum et corporis.”
            </p>
          </div>
          <div className="testimonial__cite">
            <div className="testimonial__cite-info">
              <span className="testimonial__cite-name">May Andersons</span>
              <span className="testimonial__cite-divider">/</span>
              <span className="testimonial__cite-title">Workcation, CTO</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialWithoutImage;
