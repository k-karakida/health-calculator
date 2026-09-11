import React from "react";

type CalculatorCardProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
};

const CalculatorCard = ({
  title,
  description,
  children,
}: CalculatorCardProps) => {
  return (
    <div className="calculator__card">
      <h2 className="calculator__title">
        {title}
      </h2>

      {description && (
        <p className="calculator__description">
          {description}
        </p>
      )}

      <div className="calculator__form">
        {children}
      </div>
    </div>
  );
};

export default CalculatorCard;