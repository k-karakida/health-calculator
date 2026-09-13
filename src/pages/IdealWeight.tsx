import { useState } from "react";
import { Helmet } from "react-helmet-async";

import CalculatorCard from "../components/calculator/CalculatorCard";
import NumberInput from "../components/calculator/NumberInput";
import CalculateButton from "../components/calculator/CalculateButton";
import ResultCard from "../components/calculator/ResultCard";
import CalculatorLinks from "../components/calculator/CalculatorLinks";

import { calculateStandardWeight } from "../utils/bmi";

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
      <Helmet>
        <title>適正体重計算｜身長から適正体重を計算｜からだ計算ツール</title>
        <meta
          name="description"
          content="身長を入力するだけで適正体重の目安を計算できます。BMI22を基準にした適正体重を確認できる無料計算ツールです。"
        />
      </Helmet>

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

      <section className="calculator-page__content">
        <h2>適正体重の計算方法</h2>

        <p>
          適正体重は、身長からBMIを基準にして計算できます。
        </p>

        <p>
          当サイトでは、BMI 22を基準として適正体重の目安を計算しています。
        </p>

        <p>
          計算式は「身長（m）× 身長（m）× 22」です。
        </p>
      </section>

      <section className="calculator-page__content">
        <h2>身長別の適正体重</h2>

        <p>
          適正体重は身長によって異なります。
          身長が高くなるほど、適正体重の目安も変わります。
        </p>

        <p>
          当サイトでは、身長ごとの適正体重の目安を確認できます。
        </p>
      </section>

      <section className="calculator-page__content">
        <h2>適正体重の見方</h2>

        <p>
          適正体重は、健康管理や体重管理を考える際の
          ひとつの目安です。
        </p>

        <p>
          実際の健康状態や体型には個人差があるため、
          適正体重の数値だけで健康状態を判断することはできません。
        </p>

        <p>
          BMIや体脂肪率、生活習慣なども含めて、
          自分の健康状態を考えることが大切です。
        </p>
      </section>

      <section className="calculator-page__content">
        <CalculatorLinks
          links={[
            { to: "/bmi", label: "BMIを計算する" },
            { to: "/bmi-table", label: "BMI早見表を見る" },
            { to: "/height-weight", label: "身長別体重目安を見る" },
          ]}
        />
      </section>

    </div>
  );
};

export default IdealWeight;