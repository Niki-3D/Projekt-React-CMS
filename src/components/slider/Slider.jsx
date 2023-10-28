import "./Slider.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useContext } from "react";
import { AppContext } from "./../../context/app.context";

const Slider = () => {
  const { imageLinks } = useContext(AppContext);

  const slideStyles = imageLinks.map((imageLink, index) => ({
    backgroundImage: `url(${imageLink})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }));

  return (
    <div className="slider-container container">
      <Carousel>
        {slideStyles.map((slideStyle, index) => (
          <div
            className={`slide slide-${index + 1}`}
            style={slideStyle}
            key={`slide-${index}`}
          >
            <p className="legend">Slide {index + 1}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
