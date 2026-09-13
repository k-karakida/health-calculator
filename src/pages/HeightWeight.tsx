import { useState } from "react";
import { Helmet } from "react-helmet-async";

import NumberInput from "../components/calculator/NumberInput";
import CalculatorCard from "../components/calculator/CalculatorCard";
import CalculateButton from "../components/calculator/CalculateButton";
import CalculatorLinks from "../components/calculator/CalculatorLinks";

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

// 身長別体重を計算するページ
const HeightWeight = () => {
  const [height, setHeight] = useState("");
  const [calculatedHeight, setCalculatedHeight] =
    useState<number | null>(null);
  const [error, setError] = useState("");

  const handleCalculate = () => {
    const heightValue = Number(height);

    if (!height || heightValue <= 0) {
      setError("正しい値を入力してください");
      return;
    }

    setError("");
    setCalculatedHeight(heightValue);
  };

  return (
    <div className="height-weight-page">
      <Helmet>
        <title>身長別体重目安｜身長から体重の目安を確認｜からだ計算ツール</title>
        <meta
          name="description"
          content="身長別に体重の目安を確認できる計算ツールです。BMIを基準にした体重の目安を簡単に確認できます。"
        />
      </Helmet>

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

          {error && (
            <p className="height-weight__error">
              {error}
            </p>
          )}

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

      <section className="height-weight__content">
        <h2>体重の目安について</h2>

        <p>
          体重の適正な範囲は、身長や体格などによって異なります。
        </p>

        <p>
          身長別の体重目安は、健康管理や体重管理を考える際の
          ひとつの参考としてご利用ください。
        </p>

        <p>
          実際の健康状態や体型には個人差があるため、
          体重の数値だけで健康状態を判断することはできません。
        </p>
      </section>

      <section className="height-weight__content">
        <h2>BMIと体重の関係</h2>

        <p>
          BMIは、身長と体重から算出される体格の指標です。
        </p>

        <p>
          同じ身長でも体重が変わるとBMIも変化するため、
          身長と体重はBMIと密接に関係しています。
        </p>

        <p>
          自分の身長と体重からBMIを確認したい場合は、
          BMI計算ツールをご利用ください。
        </p>

      </section>

      <section className="height-weight__content">
        <h2>身長別体重目安の見方</h2>

        <p>
          自分の身長に近い数値を確認し、
          体重の目安としてご利用ください。
        </p>

        <p>
          より詳しく体重の基準を確認したい場合は、
          BMIや適正体重もあわせて確認することをおすすめします。
        </p>
      </section>
      <section className="height-weight__content">
        <CalculatorLinks
          links={[
            { to: "/bmi", label: "BMIを計算する" },
            { to: "/ideal-weight", label: "適正体重を計算する" },
            { to: "/bmi-table", label: "BMI早見表を見る" },
          ]}
        />
      </section>
    </div>
  );
};

export default HeightWeight;