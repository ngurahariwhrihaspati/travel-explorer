import { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import img1 from "../assets/images/4L.jpg";
import img2 from "../assets/images/5L.jpg";
import img3 from "../assets/images/6L.jpg";
import img4 from "../assets/images/7L.jpg";
import img5 from "../assets/images/8L.jpg";

const Destination = () => {
  const [activeFilter, setActiveFilter] = useState("Popular");
  const filters = [
    "Popular",
    "USA",
    "Europe",
    "Asia",
    "Africa & Middle East",
    "Australia & The Pacific",
    "Canada",
    "More",
  ];

  const data = [
    {
      id: 1,
      concierge: "Golden Bridge",
      img: img1,
      City: "Bana Hills, Vietnam",
      region: "Asia",
    },
    {
      id: 2,
      concierge: "Empire State Building",
      img: img2,
      City: "New York",
      region: "USA",
    },
    {
      id: 3,
      concierge: "Eiffel Tower",
      img: img3,
      City: "Paris",
      region: "Europe",
    },
    {
      id: 4,
      concierge: "Sydney Opera House",
      img: img4,
      City: "Sydney",
      region: "Australia & The Pacific",
    },
    {
      id: 5,
      concierge: "Rocky Mountains",
      img: img5,
      City: "Colorado",
      region: "USA",
    },
  ];

  const [emblaRef] = useEmblaCarousel({
    loop: false,
    align: "start",
  });

  return (
    <section id="destinations" className="container">
      <div className="section-header">
        <h2 className="section-title">Popular Destinations</h2>
        <a href="#" className="section-link">
          Explore all destinations →
        </a>
      </div>
      <div className="pill-row" role="group" aria-label="Filter by region">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`pill ${activeFilter === filter ? "active" : ""}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      <div
        className="destinations"
        role="list"
        aria-label="List of destinations"
      >
        <div className="destinations-viewport" ref={emblaRef}>
          <div className="destinations-container">
            {data
              .filter(
                (item) =>
                  activeFilter === "Popular" || item.region === activeFilter,
              )
              .map((item) => (
                <div key={item.id} className="destinations-card">
                  <img src={item.img} alt={item.concierge} />
                  <div className="destinations-card-content">
                    <h3>{item.concierge}</h3>
                    <p>{item.City}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destination;
