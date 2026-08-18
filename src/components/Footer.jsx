const Footer = () => {
  return (
    <>
      <div className="footer-grid">
        <div className="footer-brand">
          <p className="footer-brand-name">Wanderlust</p>
          <p className="quote">
            Inspiring adventures and helping travellers discover the world's
            most remarkable places.
          </p>
          <div className="footer-socials" aria-label="Social media links">
            <div className="social-icon" title="Facebook" role="link">
              f
            </div>
            <div className="social-icon" title="Instagram" role="link">
              in
            </div>
            <div className="social-icon" title="Twitter/X" role="link">
              𝕏
            </div>
            <div className="social-icon" title="Pinterest" role="link">
              P
            </div>
            <div className="social-icon" title="YouTube" role="link">
              ▶
            </div>
          </div>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Terms &amp; Conditions</a>
            </li>
            <li>
              <a href="#">Work with us</a>
            </li>
            <li>
              <a href="#">Cookie Settings</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Travel interest</h4>
          <ul>
            <li>
              <a href="#">Adventure</a>
            </li>
            <li>
              <a href="#">Restaurants</a>
            </li>
            <li>
              <a href="#">Travel on a budget</a>
            </li>
            <li>
              <a href="#">Travel Tips</a>
            </li>
            <li>
              <a href="#">Food &amp; Drink</a>
            </li>
            <li>
              <a href="#">Hike Tips</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Top destinations</h4>
          <ul>
            <li>
              <a href="#">Asia</a>
            </li>
            <li>
              <a href="#">Europe</a>
            </li>
            <li>
              <a href="#">London</a>
            </li>
            <li>
              <a href="#">New York City</a>
            </li>
            <li>
              <a href="#">Los Angeles</a>
            </li>
            <li>
              <a href="#">Explore</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Guidebook shop</h4>
          <ul>
            <li>
              <a href="#">Destination Guides</a>
            </li>
            <li>
              <a href="#">Photo Books</a>
            </li>
            <li>
              <a href="#">Shooting Guides</a>
            </li>
            <li>
              <a href="#">100 Travel Books</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="quote">
          Copyright © {new Date().getFullYear()} Wanderlust. All rights
          reserved.
        </p>
        <p className="quote">
          <a href="#">Privacy Policy</a> · <a href="#">Cookie Policy</a> ·{" "}
          <a href="#">Sitemap</a>
        </p>
      </div>
    </>
  );
};

export default Footer;
