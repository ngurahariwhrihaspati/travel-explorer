import { useEffect, useState } from "react";
import img1 from "../assets/images/4H.jpg";
import img2 from "../assets/images/5H.jpg";
import img3 from "../assets/images/6H.jpg";
import video1 from "../assets/videos/example.mp4";

const slides = [
  { id: 1, img: img1 },
  { id: 2, img: img2 },
  { id: 3, img: img3 },
];

const Highlights = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStart === null) return;

    const touchEnd = e.changedTouches[0].clientX;
    const delta = touchEnd - touchStart;

    if (delta > 50) {
      setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    } else if (delta < -50) {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }

    setTouchStart(null);
  };

  return (
    <section id="highlight" className="container">
      <div className="section-header">
        <h2 className="section-title">Highlights</h2>
        <a href="#" className="section-link">
          See more articles →
        </a>
      </div>

      <div className="highlight-grid">
        <div className="highlight-testimonial">
          <div className="author">
            <div className="author-avatar">MP</div>
            <div>
              <p className="author-name">Maria Pangalima</p>
              <p className="author-location">Manila, Philippines</p>
            </div>
          </div>
          <div className="rating">★★★★★</div>
          <p className="quote">
            <span>An Unforgettable Journey Through Turkey</span> visiting Göreme
            and the Bosphorus changed my perspective on travel. The balloon ride
            over Cappadocia at sunrise is something I'll carry forever.
          </p>
        </div>

        <div className="carousel-picture">
          <div className="carousel">
            <div
              className="carousel-track"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="carousel-slide">
                  <img src={slide.img} alt="image" className="bg" />
                </div>
              ))}
            </div>

            <div className="carousel-indicators">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  className={index === activeIndex ? "active" : ""}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="highlight-container">
          <div className="highlight-video">
            <video
              src={video1}
              className="highlight-video-player"
              controls
              muted
              playsInline
              preload="metadata"
            />
          </div>
          <p className="quote">
            <span>An Unforgettable Journey Through Turkey</span>
          </p>
          <a href="#" className="btn btn-secondary">
            Plan your trip
          </a>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
