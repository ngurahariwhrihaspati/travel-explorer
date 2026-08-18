import { useEffect } from "react";

const Header = () => {
  function toggleDrawer() {
    const drawer = document.getElementById("nav-drawer");
    drawer.classList.toggle("open");
  }

  useEffect(() => {
    function handleOutsideClick(e) {
      const drawer = document.getElementById("nav-drawer");
      const hamburger = document.querySelector(".nav-hamburger");

      if (!drawer.contains(e.target) && e.target !== hamburger) {
        drawer.classList.remove("open");
      }
    }

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div>
      <nav className="nav">
        <span className="nav-logo">Wanderlust</span>
        <ul className="nav-links">
          <li>
            <a href="#">Destinations</a>
          </li>
          <li>
            <a href="#">Travel Tips</a>
          </li>
          <li>
            <a href="#">Inspiration</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Stay</a>
          </li>
        </ul>
        <div className="nav-right">
          <i className="fa-solid fa-magnifying-glass nav-search"></i>
          <a href="#" className="btn btn-primary">
            Sign In
          </a>
          <button
            className="nav-hamburger"
            aria-label="Open menu"
            onClick={toggleDrawer}
          >
            &#9776;
          </button>
        </div>
      </nav>
      <div className="nav-drawer" id="nav-drawer">
        <a href="#">Destinations</a>
        <a href="#">Travel Tips</a>
        <a href="#">Inspiration</a>
        <a href="#">Blog</a>
        <a href="#">Stay</a>
        <a href="#" className="btn btn-primary">
          Sign in
        </a>
      </div>
    </div>
  );
};

export default Header;
