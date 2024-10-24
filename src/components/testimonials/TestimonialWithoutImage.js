const TestimonialWithoutImage = ({ logo, text, citeName, citeTitle }) => {
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
            <p className="testimonial__text">{text}</p>
          </div>
          <div className="testimonial__cite">
            <div className="testimonial__cite-info">
              <span className="testimonial__cite-name">{citeName}</span>
              <span className="testimonial__cite-divider">/</span>
              <span className="testimonial__cite-title">{citeTitle}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialWithoutImage;
