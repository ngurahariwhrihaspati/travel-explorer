import image1 from "../assets/images/1H.jpg";
import image2 from "../assets/images/1L.jpg";
import image3 from "../assets/images/3L.jpg";

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero">
        <div className="hero-text">
          <h1>
            Discover the World's <span>Hidden </span>Wonders
          </h1>
          <p>
            Find the unique moments and hidden gems that ignite unforgettable
            experiences. From rare encounters to remarkable destinations. We
            help you uncover the spark that turns every trip into a cherished
            story.
          </p>
        </div>

        <div className="image-main">
          <img className="img-block" src={image1} alt="Destination 1" />
          <img className="img-block" src={image2} alt="Destination 2" />
          <img className="img-block" src={image3} alt="Destination 3" />
        </div>

        <div className="hero-actions">
          <a href="#" className="btn btn-primary">
            Plan your trip
          </a>
          <a href="#destinations" className="btn btn-outline">
            Explore destinations
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
