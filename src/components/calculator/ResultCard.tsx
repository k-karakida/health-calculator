import { Link } from "react-router-dom";

type ResultLink = {
  to: string;
  label: string;
};

type ResultCardProps = {
  label: string;
  value: string;
  category?: string;
  categoryColor?: string;
  links?: ResultLink[];
};

const ResultCard = ({
  label,
  value,
  category,
  categoryColor,
  links = [],
}: ResultCardProps) => {
  return (
    <div className="calculator__result">
      <p className="calculator__result-label">
        {label}
      </p>

      <p className="calculator__result-value">
        {value}
      </p>

      {category && (
        <p className="calculator__result-category"
          style={{ color: categoryColor }}
        >          
          {category}
        </p>
      )}

      {links.length > 0 && (
        <div className="calculator__result-links">
          {links.map((link) => (
            <Link key={link.to} to={link.to}>
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ResultCard;