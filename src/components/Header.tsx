import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavClick = (path: string) => {
    closeMenu();

    if (location.pathname === path) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/" className="header__logo" onClick={() => handleNavClick("/")}>
          <span className="header__logo-icon">●</span>
          <span>からだ計算ツール</span>
        </Link>

        <button
          type="button"
          className={`header__menu-button ${
            isMenuOpen ? "header__menu-button--open" : ""
          }`}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="メニューを開く"
          aria-expanded={isMenuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          className={`header__nav ${
            isMenuOpen ? "header__nav--open" : ""
          }`}
        >
          <Link to="/bmi" onClick={() => handleNavClick("/bmi")}>
            BMI計算
          </Link>

          <Link to="/ideal-weight" onClick={() => handleNavClick("/ideal-weight")}>
            適正体重
          </Link>

          <Link to="/bmi-table" onClick={() => handleNavClick("/bmi-table")}>
            BMI早見表
          </Link>

          <Link to="/height-weight" onClick={() => handleNavClick("/height-weight")}>
            身長別体重
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;