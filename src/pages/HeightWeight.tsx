import { useState } from "react";

import NumberInput from "../components/calculator/NumberInput";
import CalculatorCard from "../components/calculator/CalculatorCard";
import CalculateButton from "../components/calculator/CalculateButton";

import "./HeightWeight.css";

const bmiValues = [
  {
    bmi: 18.5,
    label: "低体重の境目",
  },
  {
    bmi: 20,
    label: "普通体重",
  },
  {
    bmi: 22,
    label: "標準体重の目安",
  },
  {
    bmi: 23,
    label: "普通体重",
  },
  {
    bmi: 25,
    label: "肥満（1度）の境目",
  },
  {
    bmi: 30,
    label: "肥満（2度）の境目",
  },
];

const HeightWeight = () => {
  const [height, setHeight] = useState("");
  const [calculatedHeight, setCalculatedHeight] =
    useState<number | null>(null);

  const handleCalculate = () => {
    const heightValue = Number(height);

    if (!height || heightValue <= 0) {
      return;
    }

    setCalculatedHeight(heightValue);
  };

  return (
    <div className="height-weight-page">

      <section className="height-weight-page__hero">

        <p className="height-weight-page__eyebrow">
          HEIGHT & WEIGHT
        </p>

        <h1>身長別体重</h1>

        <p>
          身長ごとのBMI別体重の目安を確認できます。
        </p>

        <CalculatorCard
          title="身長を入力"
          description="身長を入力すると体重の目安を表示します。"
        >

          <NumberInput
            id="height"
            label="身長"
            value={height}
            unit="cm"
            placeholder="170"
            onChange={setHeight}
          />

          <CalculateButton
            onClick={handleCalculate}
          >
            体重の目安を見る
          </CalculateButton>

        </CalculatorCard>

      </section>

      {calculatedHeight !== null && (

        <section className="height-weight-page__result">

          <h2>
            {calculatedHeight}cmの場合
          </h2>

          <div className="height-weight-table">

            <table>

              <thead>
                <tr>
                  <th>BMI</th>
                  <th>体重の目安</th>
                  <th>BMIの目安</th>
                </tr>
              </thead>

              <tbody>
                {bmiValues.map((item) => {
                  const heightM = Number(height) / 100;
                  const weight = item.bmi * heightM * heightM;

                  return (
                    <tr key={item.bmi}>
                      <td>{item.bmi}</td>
                      <td>{weight.toFixed(1)} kg</td>
                      <td>{item.label}</td>
                    </tr>
                  );
                })}
              </tbody>

            </table>

          </div>

        </section>
      )}

    </div>
  );
};

export default HeightWeight;