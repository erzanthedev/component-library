const TestimonialWithoutImage = () => {
  return (
    <div className="testimonial testimonial--no-image">
      <div className="testimonial__wrapper">
        <div className="testimonial__content">
          <div className="testimonia__leading-content">
            <img src="" className="testimonia__logo" alt="empty logo" />
            <p className="testimonial__text">
              “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              expedita voluptas culpa sapiente alias molestiae. Numquam corrupti
              in laborum sed rerum et corporis.”
            </p>
          </div>
          <div className="testimonial__cite"></div>
        </div>
      </div>
      {/* Dot Pattern */}
    </div>
  );
};

export default TestimonialWithoutImage;
