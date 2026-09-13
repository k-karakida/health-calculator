import { Link } from "react-router-dom";

type CalculatorLink = {
  to: string;
  label: string;
};

type CalculatorLinksProps = {
  links: CalculatorLink[];
};

const CalculatorLinks = ({ links }: CalculatorLinksProps) => {
  return (
    <section className="calculator-links">
      <h2>関連する計算ツール</h2>

      <div className="calculator-links__list">
        {links.map((link) => (
          <Link key={link.to} to={link.to}>
            {link.label} →
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CalculatorLinks;
