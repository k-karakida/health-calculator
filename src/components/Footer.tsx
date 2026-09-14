import { Link, useLocation } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const location = useLocation();
  const currentYear = new Date().getFullYear();

  const handleNavClick = (path: string) => {
    if (location.pathname === path) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <Link to="/" className="footer__logo" onClick={() => handleNavClick("/")}>
            <span className="footer__logo-icon">●</span>
            <span>からだ計算ツール</span>
          </Link>

          <p className="footer__description">
            BMIや体重など、からだに関する
            <br />
            数値をかんたんに計算できる無料ツールです。
          </p>
        </div>

        <div className="footer__links">
          <div className="footer__link-group">
            <h2>BMI・体重</h2>

            <Link to="/bmi" onClick={() => handleNavClick("/bmi")}>
              BMI計算
            </Link>
            <Link to="/ideal-weight" onClick={() => handleNavClick("/ideal-weight")}>
              適正体重計算
            </Link>
            <Link to="/height-weight" onClick={() => handleNavClick("/height-weight")}>
              身長別体重表
            </Link>
            <Link to="/bmi-table" onClick={() => handleNavClick("/bmi-table")}>
              BMI早見表
            </Link>
          </div>

          <div className="footer__link-group">
            <h2>ダイエット計算</h2>

            <Link to="/basal-metabolism" onClick={() => handleNavClick("/basal-metabolism")}>
              基礎代謝計算
            </Link>
            <Link to="/calorie-burn" onClick={() => handleNavClick("/calorie-burn")}>
              消費カロリー計算
            </Link>
            <Link to="/calorie-intake" onClick={() => handleNavClick("/calorie-intake")}>
              摂取カロリー計算
            </Link>
            <Link to="/calorie-balance" onClick={() => handleNavClick("/calorie-balance")}>
              カロリー収支計算
            </Link>
            <Link to="/diet-period" onClick={() => handleNavClick("/diet-period")}>
              ダイエット期間計算
            </Link>
          </div>

          <div className="footer__link-group">
            <h2>体型チェック</h2>

            <Link to="/body-fat" onClick={() => handleNavClick("/body-fat")}>
              体脂肪率計算
            </Link>
            <Link to="/waist-hip-ratio" onClick={() => handleNavClick("/waist-hip-ratio")}>
              ウエストヒップ比
            </Link>
            <Link to="/waist-check" onClick={() => handleNavClick("/waist-check")}>
              腹囲チェック
            </Link>
          </div>

          <div className="footer__link-group">            
            <h2>サイトについて</h2>

            <Link to="/about" onClick={() => handleNavClick("/about")}>
              サイトについて
            </Link>
            <Link to="/privacy" onClick={() => handleNavClick("/privacy")}>
              プライバシーポリシー
            </Link>
            <Link to="/terms" onClick={() => handleNavClick("/terms")}>
              利用規約
            </Link>
            <Link to="/disclaimer" onClick={() => handleNavClick("/disclaimer")}>
              免責事項
            </Link>
            <Link to="/contact" onClick={() => handleNavClick("/contact")}>
              お問い合わせ
            </Link>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© {currentYear} からだ計算ツール</p>
      </div>
    </footer>
  );
};

export default Footer;