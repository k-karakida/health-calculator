type NumberInputProps = {
  id: string;
  label: string;
  value: string;
  unit: string;
  placeholder?: string;
  onChange: (value: string) => void;
};

const NumberInput = ({
  id,
  label,
  value,
  unit,
  placeholder,
  onChange,
}: NumberInputProps) => {
  return (
    <div className="calculator__field">
      <label htmlFor={id}>{label}</label>

      <div className="calculator__input-wrapper">
        <input
          id={id}
          type="number"
          inputMode="decimal"
          min="0"
          step="0.1"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />

        <span>{unit}</span>
      </div>
    </div>
  );
};

export default NumberInput;