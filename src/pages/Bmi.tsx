import { useState } from "react";
import { Helmet } from "react-helmet-async";

import CalculatorCard from "../components/calculator/CalculatorCard";
import NumberInput from "../components/calculator/NumberInput";
import CalculateButton from "../components/calculator/CalculateButton";
import ResultCard from "../components/calculator/ResultCard";
import CalculatorLinks from "../components/calculator/CalculatorLinks";

import {
  calculateBmi,
  getBmiCategory,
} from "../utils/bmi";

import "./Bmi.css";

const Bmi = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [error, setError] = useState("");

  const handleCalculate = () => {
    const heightValue = Number(height);
    const weightValue = Number(weight);

    if (
      !height ||
      !weight ||
      heightValue <= 0 ||
      weightValue <= 0
    ) {
      setError("正しい値を入力してください");
      return;
    }

    setError("");

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
      <Helmet>
        <title>BMI計算｜身長・体重からBMIを計算｜からだ計算ツール</title>
        <meta
          name="description"
          content="身長と体重を入力するだけでBMIを計算できます。BMIの判定や標準体重の目安も確認できる無料のBMI計算ツールです。"
        />
      </Helmet>
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

          {error && (
            <p className="calculator-page__error">
              {error}
            </p>
          )}

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
            links={[
              { to: "/ideal-weight", label: "標準体重を計算する →" },
              { to: "/bmi-table", label: "BMI早見表を見る →" },
              { to: "/height-weight", label: "身長別体重目安を見る →" },
            ]}
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
      </section>

      <section className="calculator-page__content">
        <h2>BMIの計算方法</h2>

        <p>
          BMIは「体重kg ÷ 身長m ÷ 身長m」で
          計算できます。
        </p>
      </section>

      <section className="calculator-page__content">
        <h2>BMIの判定基準</h2>

        <p>
          BMIは、以下の基準で判定されます。
        </p>

        <ul>
          <li>18.5未満：低体重</li>
          <li>18.5以上25未満：普通体重</li>
          <li>25以上30未満：肥満（1度）</li>
          <li>30以上35未満：肥満（2度）</li>
          <li>35以上40未満：肥満（3度）</li>
          <li>40以上：肥満（4度）</li>
        </ul>

      </section>

      <section className="calculator-page__content">
        <h2>BMI計算の結果</h2>

        <p>
          BMIは、身長と体重から体格の目安を確認するための指標です。
        </p>

        <p>
          BMIの数値だけで健康状態を判断できるものではなく、
          年齢や体脂肪率、筋肉量、生活習慣などによっても
          身体の状態は異なります。
        </p>

        <p>
          計算結果は健康管理の参考としてご利用ください。
        </p>
      </section>

      <section className="calculator-page__content">
        <CalculatorLinks
          links={[
            { to: "/ideal-weight", label: "適正体重を計算する" },
            { to: "/bmi-table", label: "BMI早見表を見る" },
            { to: "/height-weight", label: "身長別体重目安を見る" },
          ]}
        />
      </section>

    </div>
  );
};

export default Bmi;