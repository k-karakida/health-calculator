import { useState } from "react";
import { Helmet } from "react-helmet-async";
import CalculatorCard from "../components/calculator/CalculatorCard";
import NumberInput from "../components/calculator/NumberInput";
import CalculateButton from "../components/calculator/CalculateButton";
import ResultCard from "../components/calculator/ResultCard";
import CalculatorLinks from "../components/calculator/CalculatorLinks";
import "./WaistHipRatio.css";

type Gender = "male" | "female";

const WaistHipRatio = () => {
  const [gender, setGender] = useState<Gender>("male");
  const [waist, setWaist] = useState("");
  const [hip, setHip] = useState("");

  const [result, setResult] = useState<number | null>(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleCalculate = () => {
    const waistValue = Number(waist);
    const hipValue = Number(hip);

    if (
      !waist ||
      !hip ||
      waistValue <= 0 ||
      hipValue <= 0
    ) {
      setResult(null);
      setMessage("");
      setError("正しい値を入力してください");
      return;
    }

    setError("");

    const ratio = waistValue / hipValue;
    const roundedRatio = Math.round(ratio * 100) / 100;

    setResult(roundedRatio);

    const standard = gender === "male" ? 0.9 : 0.85;

    if (ratio > standard) {
      setMessage(
        `目安（${standard}）を超えています。`
      );
    } else {
      setMessage(
        `目安（${standard}）以下です。`
      );
    }
  };

  const standard = gender === "male" ? 0.9 : 0.85;

  return (
    <div className="waist-hip-ratio">
      <Helmet>
        <title>
          ウエストヒップ比計算｜WHRを計算して目安を確認
        </title>

        <meta
          name="description"
          content="ウエストとヒップのサイズからウエストヒップ比（WHR）を計算できます。男女別の目安と比較して確認できる無料計算ツールです。"
        />
      </Helmet>

      <section className="waist-hip-ratio__header">
        <h1>ウエストヒップ比計算</h1>

        <p>
          性別・ウエスト・ヒップのサイズから、
          ウエストヒップ比の目安を計算します。
        </p>
      </section>

      <CalculatorCard
        title="ウエストヒップ比を計算"
        description="性別、ウエスト、ヒップのサイズを入力してください。"
      >
        <div className="waist-hip-ratio__gender">
          <p className="waist-hip-ratio__label">
            性別
          </p>

          <div className="waist-hip-ratio__gender-options">
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={gender === "male"}
                onChange={() => setGender("male")}
              />
              <span>男性</span>
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={gender === "female"}
                onChange={() => setGender("female")}
              />
              <span>女性</span>
            </label>
          </div>
        </div>

        <NumberInput
          id="waist-hip-ratio-waist"
          label="ウエスト"
          value={waist}
          unit="cm"
          placeholder="例：80"
          onChange={setWaist}
        />

        <NumberInput
          id="waist-hip-ratio-hip"
          label="ヒップ"
          value={hip}
          unit="cm"
          placeholder="例：95"
          onChange={setHip}
        />

        <CalculateButton onClick={handleCalculate}>
          ウエストヒップ比を計算する
        </CalculateButton>

        {error && (
          <p className="waist-hip-ratio__error">
            {error}
          </p>
        )}

        {result !== null && (
          <ResultCard
            label="ウエストヒップ比"
            value={`${result}`}
            category={message}
            categoryColor={
              (gender === "male" && result > 0.9) ||
              (gender === "female" && result > 0.85)
                ? "#D32F2F"
                : "#4CAF7D"
            }
            links={[
              {
                to: "/body-fat",
                label: "体脂肪率を計算する",
              },
              {
                to: "/bmi",
                label: "BMIを計算する",
              },
            ]}
          />
        )}
      </CalculatorCard>

      <section className="waist-hip-ratio__section">
        <h2>ウエストヒップ比とは？</h2>

        <p>
          ウエストヒップ比（WHR）とは、
          ウエストとヒップのサイズから算出する比率です。
        </p>

        <p>
          ウエストのサイズをヒップのサイズで割ることで、
          ウエストヒップ比を求めることができます。
        </p>
      </section>

      <section className="waist-hip-ratio__section">
        <h2>ウエストヒップ比の計算方法</h2>

        <p>
          ウエストヒップ比は、
          「ウエスト（cm）÷ ヒップ（cm）」で計算します。
        </p>

        <p>
          例えば、ウエスト80cm、ヒップ100cmの場合、
          ウエストヒップ比は0.80となります。
        </p>
      </section>

      <section className="waist-hip-ratio__section">
        <h2>ウエストヒップ比の目安</h2>

        <p>
          WHOの資料では、ウエストヒップ比について、
          男性0.90超、女性0.85超を高い値として扱う例があります。
        </p>

        <div className="waist-hip-ratio__standards">
          <div className="waist-hip-ratio__standard">
            <span>男性</span>
            <strong>0.90超</strong>
          </div>

          <div className="waist-hip-ratio__standard">
            <span>女性</span>
            <strong>0.85超</strong>
          </div>
        </div>

        <p>
          これらは健康状態を判断するための絶対的な基準ではなく、
          体型や健康管理の参考となる目安としてご利用ください。
        </p>
      </section>

      <section className="waist-hip-ratio__section">
        <h2>計算結果について</h2>

        <p>
          計算結果は、入力されたウエストとヒップのサイズから
          算出したウエストヒップ比です。
        </p>

        <p>
          ウエストヒップ比は年齢や性別、体格などによって
          健康リスクとの関係が異なるため、数値だけで健康状態を
          判断することはできません。
        </p>

        <p>
          健康状態を確認する際は、BMIや腹囲などの指標と
          あわせて参考にしてください。
        </p>
      </section>

      <section className="waist-hip-ratio__section">
        <CalculatorLinks
          links={[
            {
              to: "/body-fat",
              label: "体脂肪率を計算する",
            },
            {
              to: "/bmi",
              label: "BMIを計算する",
            },
            {
              to: "/ideal-weight",
              label: "適正体重を計算する",
            },
            {
              to: "/height-weight",
              label: "身長別体重目安を見る",
            },
          ]}
        />
      </section>
    </div>
  );
};

export default WaistHipRatio;