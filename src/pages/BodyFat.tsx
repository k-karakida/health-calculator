import { useState } from "react";
import { Helmet } from "react-helmet-async";
import CalculatorCard from "../components/calculator/CalculatorCard";
import NumberInput from "../components/calculator/NumberInput";
import CalculateButton from "../components/calculator/CalculateButton";
import ResultCard from "../components/calculator/ResultCard";
import CalculatorLinks from "../components/calculator/CalculatorLinks";
import {
  calculateBodyFat,
  roundBodyFat,
  type Gender,
} from "../utils/bodyFat";
import "./BodyFat.css";

const BodyFat = () => {
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

    const bodyFat = calculateBodyFat(
      gender,
      ageValue,
      heightValue,
      weightValue
    );

    setResult(roundBodyFat(bodyFat));
  };

  return (
    <div className="body-fat">
      <Helmet>
        <title>体脂肪率計算｜年齢・身長・体重から体脂肪率を推定</title>
        <meta
          name="description"
          content="年齢、性別、身長、体重から体脂肪率の目安を計算できる無料ツールです。計算結果は推定値として健康管理の参考にご利用ください。"
        />
      </Helmet>

      <section className="body-fat__header">
        <h1>体脂肪率計算</h1>
        <p>
          年齢・性別・身長・体重から、
          体脂肪率の目安を計算します。
        </p>
      </section>

      <CalculatorCard
        title="体脂肪率を計算"
        description="年齢、性別、身長、体重を入力してください。"
      >
        <div className="body-fat__gender">
          <p className="body-fat__label">
            性別
          </p>
          <div className="body-fat__gender-options">
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
          id="body-fat-age"
          label="年齢"
          value={age}
          unit="歳"
          placeholder="例：30"
          onChange={setAge}
        />

        <NumberInput
          id="body-fat-height"
          label="身長"
          value={height}
          unit="cm"
          placeholder="例：170"
          onChange={setHeight}
        />

        <NumberInput
          id="body-fat-weight"
          label="体重"
          value={weight}
          unit="kg"
          placeholder="例：65"
          onChange={setWeight}
        />

        <CalculateButton onClick={handleCalculate}>
          体脂肪率を計算する
        </CalculateButton>

        {error && (
          <p className="body-fat__error">
            {error}
          </p>
        )}

        {result !== null && (
          <ResultCard
            label="推定体脂肪率"
            value={`${result}%`}
            links={[
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
        )}
      </CalculatorCard>

      <section className="body-fat__section">
        <h2>体脂肪率とは？</h2>

        <p>
          体脂肪率とは、体重に占める脂肪の割合を示したものです。
        </p>

        <p>
          BMIは身長と体重から体格を確認する指標ですが、
          体脂肪率は体重に占める脂肪の割合を見るための指標です。
        </p>
      </section>

      <section className="body-fat__section">
        <h2>体脂肪率の計算方法</h2>

        <p>
          当サイトでは、年齢、性別、身長、体重からBMIを求め、
          それらの情報をもとに体脂肪率の目安を推定しています。
        </p>

        <p>
          計算結果は実測値ではなく、あくまで推定値です。
        </p>
      </section>

      <section className="body-fat__section">
        <h2>体脂肪率の目安について</h2>

        <p>
          体脂肪率には個人差があり、年齢や性別、筋肉量などによっても異なります。
        </p>

        <p>
          そのため、体脂肪率の数値だけで健康状態を判断することはできません。
        </p>
      </section>

      <section className="body-fat__section">
        <h2>計算結果について</h2>

        <p>
          計算結果は、年齢、性別、身長、体重から算出した
          推定体脂肪率です。
        </p>

        <p>
          実際の体脂肪率は、体脂肪計などで測定した値とは異なる場合があります。
          健康管理の参考値としてご利用ください。
        </p>
      </section>

      <section className="body-fat__section">
        <CalculatorLinks
          links={[
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
            {
              to: "/calorie-burn",
              label: "消費カロリーを計算する",
            },
          ]}
        />
      </section>
    </div>
  );
};

export default BodyFat;