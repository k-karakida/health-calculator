type CalculateButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

const CalculateButton = ({
  children,
  onClick,
}: CalculateButtonProps) => {
  return (
    <button
      type="button"
      className="calculator__button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CalculateButton;