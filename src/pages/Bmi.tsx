import { useState } from "react";

import CalculatorCard from "../components/calculator/CalculatorCard";
import NumberInput from "../components/calculator/NumberInput";
import CalculateButton from "../components/calculator/CalculateButton";
import ResultCard from "../components/calculator/ResultCard";

import {
  calculateBmi,
  getBmiCategory,
} from "../utils/bmi";

import "../components/calculator/Calculator.css";
import "./Bmi.css";

const Bmi = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);

  const handleCalculate = () => {
    const heightValue = Number(height);
    const weightValue = Number(weight);

    if (
      !height ||
      !weight ||
      heightValue <= 0 ||
      weightValue <= 0
    ) {
      return;
    }

    const result = calculateBmi(
      heightValue,
      weightValue
    );

    setBmi(result);
  };

  const category =
    bmi !== null
      ? getBmiCategory(bmi)
      : null;

  return (
    <div className="calculator-page">
      <section className="calculator-page__hero">

        <p className="calculator-page__eyebrow">
          BMI CALCULATOR
        </p>

        <h1>BMI計算</h1>

        <p>
          身長と体重からBMIを計算します。
        </p>

        <CalculatorCard
          title="BMIを計算"
          description="身長と体重を入力してください。"
        >

          <NumberInput
            id="height"
            label="身長"
            value={height}
            unit="cm"
            placeholder="170"
            onChange={setHeight}
          />

          <NumberInput
            id="weight"
            label="体重"
            value={weight}
            unit="kg"
            placeholder="65"
            onChange={setWeight}
          />

          <CalculateButton
            onClick={handleCalculate}
          >
            BMIを計算する
          </CalculateButton>

        </CalculatorCard>
        
        {bmi !== null && category !== null && (
          <ResultCard
            label="あなたのBMI"
            value={bmi.toFixed(1)}
            category={category.label}
            categoryColor={category.color}
          />
        )}

      </section>

      <section className="calculator-page__content">

        <h2>BMIとは？</h2>

        <p>
          BMI（Body Mass Index）は、身長と体重から
          算出する体格指数です。
        </p>

        <h2>BMIの計算方法</h2>

        <p>
          BMIは「体重kg ÷ 身長m ÷ 身長m」で
          計算できます。
        </p>

      </section>
    </div>
  );
};

export default Bmi;