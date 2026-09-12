import { useState } from "react";
import CalculatorCard from "../components/calculator/CalculatorCard";
import NumberInput from "../components/calculator/NumberInput";
import CalculateButton from "../components/calculator/CalculateButton";
import ResultCard from "../components/calculator/ResultCard";
import {
  calculateBasalMetabolism,
  roundCalories,
  type Gender,
} from "../utils/calorie";
import "./BasalMetabolism.css";

const BasalMetabolism = () => {
  const [gender, setGender] = useState<Gender>("male");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState("");

  const handleCalculate = () => {
    const ageValue = Number(age);
    const heightValue = Number(height);
    const weightValue = Number(weight);

    if (
      !age ||
      !height ||
      !weight ||
      ageValue <= 0 ||
      heightValue <= 0 ||
      weightValue <= 0
    ) {
      setResult(null);
      setError("正しい値を入力してください");
      return;
    }

    setError("");

    const basalMetabolism = calculateBasalMetabolism(
      gender,
      ageValue,
      heightValue,
      weightValue
    );

    setResult(roundCalories(basalMetabolism));
  };

  return (
    <div className="basal-metabolism">
      <section className="basal-metabolism__header">
        <h1>基礎代謝計算</h1>
        <p>
          年齢・性別・身長・体重から、
          1日の基礎代謝量の目安を計算します。
        </p>
      </section>

      <CalculatorCard
        title="基礎代謝量を計算"
        description="以下の項目を入力してください。"
      >
        <div className="basal-metabolism__gender">
          <p className="basal-metabolism__label">
            性別
          </p>

          <div className="basal-metabolism__gender-options">
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
          id="age"
          label="年齢"
          value={age}
          unit="歳"
          placeholder="例：30"
          onChange={setAge}
        />

        <NumberInput
          id="height"
          label="身長"
          value={height}
          unit="cm"
          placeholder="例：170"
          onChange={setHeight}
        />

        <NumberInput
          id="weight"
          label="体重"
          value={weight}
          unit="kg"
          placeholder="例：65"
          onChange={setWeight}
        />

        {error && (
          <p className="basal-metabolism__error">
            {error}
          </p>
        )}

        <CalculateButton onClick={handleCalculate}>
          基礎代謝量を計算する
        </CalculateButton>
      </CalculatorCard>

      {result !== null && (
        <ResultCard
          label="あなたの基礎代謝量の目安"
          value={`${result.toLocaleString()} kcal/日`}
          links={[
            {
              to: "/calorie-burn",
              label: "1日の消費カロリーも計算する →",
            },
          ]}
        />
      )}

      <section className="basal-metabolism__section">
        <h2>基礎代謝とは？</h2>

        <p>
          基礎代謝とは、安静にしている状態でも生命を維持するために消費されるエネルギーのことです。
          呼吸や体温維持、心臓などの働きにもエネルギーが使われています。
        </p>

        <p>
          基礎代謝量は、年齢・性別・体重・体格などによって異なります。
          このページでは、入力された情報から基礎代謝量の目安を計算します。
        </p>
      </section>

      <section className="basal-metabolism__section">
        <h2>計算結果について</h2>

        <p>
          計算結果はあくまで推定値です。
          実際のエネルギー消費量には個人差があります。
        </p>

        <p>
          1日の消費カロリーを知りたい場合は、
          身体活動レベルを加味した
          「消費カロリー計算」をご利用ください。
        </p>
      </section>
    </div>
  );
};

export default BasalMetabolism;