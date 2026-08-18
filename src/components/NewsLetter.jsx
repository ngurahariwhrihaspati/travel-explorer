const NewsLetter = () => {
  return (
    <section id="NewsLetter">
      <div className="newsletter-inner">
        <h2 className="newsletter-title">Get Your Travel Inspiration</h2>
        <h2 className="newsletter-title">Straight to Your Inbox</h2>
        <p className="newsletter-sub">
          Subscribe for our best stories and exclusive promotions.
        </p>
        <div className="newsletter-form">
          <input
            className="newsletter-input"
            type="email"
            placeholder="Email address"
            aria-label="Email address"
          />
          <button className="btn btn-primary" type="button">
            Subscribe
          </button>
        </div>
        <p className="newsletter-privacy">
          We respect your privacy. Read our <a href="#">Privacy Policy</a>.
        </p>
      </div>
    </section>
  );
};

export default NewsLetter;
