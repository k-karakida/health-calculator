import { useState } from "react";
import { Helmet } from "react-helmet-async";
import CalculatorCard from "../components/calculator/CalculatorCard";
import NumberInput from "../components/calculator/NumberInput";
import CalculateButton from "../components/calculator/CalculateButton";
import ResultCard from "../components/calculator/ResultCard";
import CalculatorLinks from "../components/calculator/CalculatorLinks";
import "./WaistCheck.css";

type Gender = "male" | "female";

const WaistCheck = () => {
  const [gender, setGender] = useState<Gender>("male");
  const [waist, setWaist] = useState("");

  const [result, setResult] = useState<number | null>(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleCalculate = () => {
    const waistValue = Number(waist);

    if (!waist || waistValue <= 0) {
      setResult(null);
      setMessage("");
      setError("正しい値を入力してください");
      return;
    }

    setError("");
    setResult(waistValue);

    const standard = gender === "male" ? 85 : 90;

    if (waistValue >= standard) {
      setMessage(
        `腹囲の基準値（${standard}cm）以上です。`
      );
    } else {
      setMessage(
        `腹囲の基準値（${standard}cm）未満です。`
      );
    }
  };

  return (
    <div className="waist-check">
      <Helmet>
        <title>
          腹囲チェック｜男女別の腹囲基準を確認｜からだ計算ツール
        </title>

        <meta
          name="description"
          content="腹囲を入力して、男女別の腹囲基準値を確認できる無料チェックツールです。厚生労働省の情報を参考に、腹囲の目安を確認できます。"
        />
      </Helmet>

      <section className="waist-check__header">
        <h1>腹囲チェック</h1>

        <p>
          性別と腹囲を入力して、
          腹囲の基準値を確認します。
        </p>
      </section>

      <CalculatorCard
        title="腹囲をチェック"
        description="性別と腹囲を入力してください。"
      >
        <div className="waist-check__gender">
          <p className="waist-check__label">
            性別
          </p>

          <div className="waist-check__gender-options">
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
          id="waist-check-waist"
          label="腹囲"
          value={waist}
          unit="cm"
          placeholder="例：80"
          onChange={setWaist}
        />

        <CalculateButton onClick={handleCalculate}>
          腹囲をチェックする
        </CalculateButton>

        {error && (
          <p className="waist-check__error">
            {error}
          </p>
        )}

        {result !== null && (
          <ResultCard
            label="腹囲"
            value={`${result}cm`}
            category={message}
            categoryColor={
              result >= (gender === "male" ? 85 : 90)
                ? "#D32F2F"
                : "#4CAF7D"
            }
            links={[
              {
                to: "/body-fat",
                label: "体脂肪率を計算する",
              },
              {
                to: "/waist-hip-ratio",
                label: "ウエストヒップ比を計算する",
              },
            ]}
          />
        )}
      </CalculatorCard>

      <section className="waist-check__section">
        <h2>腹囲とは？</h2>

        <p>
          腹囲とは、おへその高さで測定する胴回りの長さです。
          内臓脂肪の蓄積を確認するための目安のひとつとして利用されています。
        </p>
      </section>

      <section className="waist-check__section">
        <h2>腹囲の基準値</h2>

        <p>
          日本では、メタボリックシンドロームの判定において、
          腹囲が男性85cm以上、女性90cm以上であることが必須項目とされています。
        </p>

        <div className="waist-check__standards">
          <div className="waist-check__standard">
            <span>男性</span>
            <strong>85cm以上</strong>
          </div>

          <div className="waist-check__standard">
            <span>女性</span>
            <strong>90cm以上</strong>
          </div>
        </div>

        <p>
          この腹囲の基準は、内臓脂肪面積100cm²以上に相当する
          目安として設定されています。
        </p>
      </section>

      <section className="waist-check__section">
        <h2>腹囲の測り方</h2>

        <p>
          腹囲は、おへその高さで測定します。
        </p>

        <p>
          測定する姿勢やタイミングなどによって数値が変わる場合があるため、
          継続して確認する場合は、できるだけ同じ条件で測定することをおすすめします。
        </p>
      </section>

      <section className="waist-check__section">
        <h2>腹囲の判定について</h2>

        <p>
          このページでは、入力された腹囲を男女別の基準値と比較しています。
        </p>

        <p>
          腹囲が基準値以上であっても、腹囲だけでメタボリックシンドロームと
          診断されるわけではありません。血圧・血糖・脂質などの状態も含めて
          判定されます。
        </p>
      </section>

      <section className="waist-check__section">
        <h2>計算結果について</h2>

        <p>
          このチェックでは、入力された腹囲が男女別の基準値以上かどうかを
          確認しています。
        </p>

        <p>
          結果は健康管理の参考としてご利用ください。
          健康状態について気になることがある場合は、医療機関などにご相談ください。
        </p>
      </section>

      <section className="waist-check__section">
        <CalculatorLinks
          links={[
            {
              to: "/body-fat",
              label: "体脂肪率を計算する",
            },
            {
              to: "/waist-hip-ratio",
              label: "ウエストヒップ比を計算する",
            },
            {
              to: "/bmi",
              label: "BMIを計算する",
            },
            {
              to: "/ideal-weight",
              label: "適正体重を計算する",
            },
          ]}
        />
      </section>
    </div>
  );
};

export default WaistCheck;