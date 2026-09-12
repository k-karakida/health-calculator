import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const location = useLocation();

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
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

  const handleDropdownClick = (name: string) => {
    setOpenDropdown(
      openDropdown === name ? null : name
    );
  };

  return (
    <header className="header">
      <div className="header__inner">

        {/* ロゴ */}
        <Link
          to="/"
          className="header__logo"
          onClick={() => handleNavClick("/")}
        >
          からだ計算ツール
        </Link>

        {/* ハンバーガーボタン */}
        <button
          type="button"
          className={`header__menu-button ${
            isMenuOpen ? "is-open" : ""
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="メニューを開く"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* ナビゲーション */}
        <nav
          className={`header__nav ${
            isMenuOpen ? "is-open" : ""
          }`}
        >

          {/* BMI・体重 */}
          <div
            className={`header__dropdown ${
              openDropdown === "bmi"
                ? "is-open"
                : ""
            }`}
          >
            <button
              type="button"
              className="header__dropdown-button"
              onClick={() =>
                handleDropdownClick("bmi")
              }
            >
              BMI・体重
              <span className="header__arrow">
                ▼
              </span>
            </button>

            <div className="header__dropdown-menu">

              <Link
                to="/bmi"
                onClick={() =>
                  handleNavClick("/bmi")
                }
              >
                BMI計算
              </Link>

              <Link
                to="/ideal-weight"
                onClick={() =>
                  handleNavClick("/ideal-weight")
                }
              >
                適正体重
              </Link>

              <Link
                to="/bmi-table"
                onClick={() =>
                  handleNavClick("/bmi-table")
                }
              >
                BMI早見表
              </Link>

              <Link
                to="/height-weight"
                onClick={() =>
                  handleNavClick("/height-weight")
                }
              >
                身長別体重
              </Link>

            </div>
          </div>

          {/* ダイエット計算 */}
          <div
            className={`header__dropdown ${
              openDropdown === "diet"
                ? "is-open"
                : ""
            }`}
          >
            <button
              type="button"
              className="header__dropdown-button"
              onClick={() =>
                handleDropdownClick("diet")
              }
            >
              ダイエット計算
              <span className="header__arrow">
                ▼
              </span>
            </button>

            <div className="header__dropdown-menu">

              <Link
                to="/diet"
                onClick={() =>
                  handleNavClick("/diet")
                }
                className="header__dropdown-main"
              >
                ダイエット計算一覧
              </Link>

              <Link
                to="/basal-metabolism"
                onClick={() =>
                  handleNavClick(
                    "/basal-metabolism"
                  )
                }
              >
                基礎代謝計算
              </Link>

              <Link
                to="/calorie-burn"
                onClick={() =>
                  handleNavClick(
                    "/calorie-burn"
                  )
                }
              >
                消費カロリー計算
              </Link>

              <Link
                to="/calorie-intake"
                onClick={() =>
                  handleNavClick(
                    "/calorie-intake"
                  )
                }
              >
                摂取カロリー計算
              </Link>

              <Link
                to="/calorie-balance"
                onClick={() =>
                  handleNavClick(
                    "/calorie-balance"
                  )
                }
              >
                カロリー収支計算
              </Link>

              <Link
                to="/diet-period"
                onClick={() =>
                  handleNavClick(
                    "/diet-period"
                  )
                }
              >
                ダイエット期間計算
              </Link>

            </div>
          </div>

        </nav>
      </div>
    </header>
  );
};

export default Header;