import { useState } from "react";

import CalculatorCard from "../components/calculator/CalculatorCard";
import NumberInput from "../components/calculator/NumberInput";
import CalculateButton from "../components/calculator/CalculateButton";
import ResultCard from "../components/calculator/ResultCard";

import { calculateStandardWeight } from "../utils/bmi";

import "../components/calculator/Calculator.css";
import "./Bmi.css";

// 適正体重計算のページ
const IdealWeight = () => {
  const [height, setHeight] = useState("");
  const [standardWeight, setStandardWeight] =
    useState<number | null>(null);
  const [error, setError] = useState("");

  const handleCalculate = () => {
    const heightValue = Number(height);

    if (!height || heightValue <= 0) {
      setError("正しい値を入力してください");
      return;
    }

    setError("");

    const result =
      calculateStandardWeight(heightValue);

    setStandardWeight(result);
  };

  return (
    <div className="calculator-page">

      <section className="calculator-page__hero">

        <p className="calculator-page__eyebrow">
          STANDARD WEIGHT
        </p>

        <h1>適正体重計算</h1>

        <p>
          身長から標準体重の目安を計算します。
        </p>

        <CalculatorCard
          title="適正体重を計算"
          description="身長を入力してください。"
        >

          <NumberInput
            id="height"
            label="身長"
            value={height}
            unit="cm"
            placeholder="170"
            onChange={setHeight}
          />

          {error && (
            <p className="calculator-page__error">
              {error}
            </p>
          )}

          <CalculateButton
            onClick={handleCalculate}
          >
            適正体重を計算する
          </CalculateButton>

        </CalculatorCard>

        {standardWeight !== null && (
          <ResultCard
            label="標準体重の目安"
            value={`${standardWeight.toFixed(1)} kg`}
          />
        )}

      </section>

      <section className="calculator-page__content">

        <h2>適正体重について</h2>

        <p>
          標準体重は、BMI 22を基準として
          身長から算出した体重の目安です。
        </p>

        <p>
          体重だけで健康状態を判断することはできないため、
          あくまで目安としてご利用ください。
        </p>

      </section>

    </div>
  );
};

export default IdealWeight;