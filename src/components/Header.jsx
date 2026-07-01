import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../App.css";
import logo from "../assets/images/logo.jpg";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  useEffect(() => {
    if (isHome) {
      const navbar = document.getElementById("mainNavbar");
      if (window.bootstrap && navbar) {
        new window.bootstrap.ScrollSpy(document.body, {
          target: "#mainNavbar",
          offset: navbar.offsetHeight,
        });
      }
    }
  }, [isHome]);

  // Close mobile menu
  const closeMobileMenu = () => {
    const navMenu = document.getElementById("navmenu");
    const toggler = document.querySelector(".navbar-toggler");
    if (window.innerWidth < 992 && navMenu?.classList.contains("show")) {
      toggler?.click();
    }
  };

  // Scroll to section on home page
  const handleScrollLink = (e, sectionId) => {
    e.preventDefault();
    closeMobileMenu();
    if (isHome) {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  const handleRouterLink = () => {
    closeMobileMenu();
    window.scrollTo(0, 0);
  };

  const navItems = [
    { label: "HOME", type: "scroll", id: "home" },
    { label: "ABOUT", type: "page", to: "/about" },
    { label: "PROGRAMS", type: "page", to: "/programs" },
    { label: "IMPACT", type: "page", to: "/impact" },
    { label: "GET INVOLVED", type: "page", to: "/getinvolved" },
    { label: "CONTACT", type: "page", to: "/contact" },
  ];

  return (
    <nav
      id="mainNavbar"
      className="navbar fixed-top navbar-expand-lg navbar-dark main-navbar py-3"
      role="navigation"
    >
      <div className="container">
        {/* Logo */}
        <Link
          to="/"
          className="navbar-brand logo-text"
          onClick={handleRouterLink}
        >
          <img
            src={logo}
            alt="COM-LIGHT"
            className="logo-img rounded-circle"
            style={{ cursor: "pointer" }}
          />
        </Link>

        {/* Mobile Toggler */}
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
          aria-controls="navmenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto nav-links">
            {navItems.map((item) =>
              item.type === "scroll" ? (
                <li key={item.label} className="nav-item">
                  <a
                    href={`#${item.id}`}
                    className={`nav-link${isHome && location.hash === `#${item.id}` ? " active" : ""}`}
                    onClick={(e) => handleScrollLink(e, item.id)}
                  >
                    {item.label}
                  </a>
                </li>
              ) : (
                <li key={item.label} className="nav-item">
                  <Link
                    to={item.to}
                    className={`nav-link${location.pathname === item.to ? " active" : ""}`}
                    onClick={handleRouterLink}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
