import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const smoothScrollTo = (targetId, offset = 20) => {
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = document.querySelector(".header").offsetHeight;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      closeSidebar(); // Zavrie sidebar po kliknutí na odkaz
    }
  };

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => smoothScrollTo(location.hash.replace("#", "")), 300);
    }
  }, [location]);

  const handleNavigation = (e, targetId) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate(`/#${targetId}`);
      setTimeout(() => smoothScrollTo(targetId), 500);
    } else {
      smoothScrollTo(targetId);
    }
  };

  const scrollToTop = (e, targetPath) => {
    e.preventDefault();
    if (location.pathname !== targetPath) {
      navigate(targetPath);
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    closeSidebar(); // Zavrie sidebar po kliknutí
  };

  return (
    <header className="header">
      <nav className="navbar">
        <a className="logo" href="/" onClick={(e) => scrollToTop(e, "/")}>
          Z Hradu Do Rozprávky
        </a>
        <ul className="nav-links">
          <li>
            <a href="/#current-show" onClick={(e) => handleNavigation(e, "current-show")}>Aktuálne pripravujeme</a>
          </li>
          <li>
            <a href="/#about" onClick={(e) => handleNavigation(e, "about")}>O nás</a>
          </li>
          <li>
            <Link to="/shows" onClick={(e) => scrollToTop(e, "/shows")}>Predstavenia</Link>
          </li>
          <li>
            <Link to="/members" onClick={(e) => scrollToTop(e, "/members")}>Členovia</Link>
          </li>
          <li>
            <a href="/#contact" onClick={(e) => handleNavigation(e, "contact")}>Kontakt</a>
          </li>
        </ul>
        <div className="menu-icon" onClick={toggleSidebar}>
          ☰
        </div>
        <div className={`sidebar ${isSidebarOpen ? "show" : ""}`}>
          <a href="/#hero" onClick={(e) => handleNavigation(e, "hero")}>Domov</a>
          <a href="/#current-show" onClick={(e) => handleNavigation(e, "current-show")}>Aktuálne pripravujeme</a>
          <a href="/#about" onClick={(e) => handleNavigation(e, "about")}>O nás</a>
          <Link to="/shows" onClick={(e) => scrollToTop(e, "/shows")}>Predstavenia</Link>
          <Link to="/members" onClick={(e) => scrollToTop(e, "/members")}>Členovia</Link>
          <a href="/#contact" onClick={(e) => handleNavigation(e, "contact")}>Kontakt</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
