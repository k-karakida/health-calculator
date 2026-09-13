import { useState } from "react";
import { Helmet } from "react-helmet-async";

import CalculatorCard from "../components/calculator/CalculatorCard";
import NumberInput from "../components/calculator/NumberInput";
import CalculateButton from "../components/calculator/CalculateButton";
import ResultCard from "../components/calculator/ResultCard";
import CalculatorLinks from "../components/calculator/CalculatorLinks";

import {
  calculateBasalMetabolism,
  roundCalories,
  type Gender,
} from "../utils/calorie";
import "./CalorieBurn.css";

type ActivityLevel = {
  id: string;
  label: string;
  description: string;
  factor: number;
};

const activityLevels: ActivityLevel[] = [
  {
    id: "low",
    label: "低い",
    description: "座っている時間が長く、運動習慣がほとんどない",
    factor: 1.2,
  },
  {
    id: "normal",
    label: "普通",
    description: "日常的に歩いたり、軽い運動をしたりする",
    factor: 1.55,
  },
  {
    id: "high",
    label: "高い",
    description: "立ち仕事が多い、または定期的に運動している",
    factor: 1.725,
  },
];

// 消費カロリー計算のページ
const CalorieBurn = () => {
  const [gender, setGender] = useState<Gender>("male");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [activityLevel, setActivityLevel] =
    useState("normal");

  const [result, setResult] = useState<number | null>(null);
  const [basalMetabolism, setBasalMetabolism] =
    useState<number | null>(null);
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
      setBasalMetabolism(null);
      setError("正しい値を入力してください");
      return;
    }

    setError("");

    const basal = calculateBasalMetabolism(
      gender,
      ageValue,
      heightValue,
      weightValue
    );

    const selectedActivity = activityLevels.find(
      (activity) => activity.id === activityLevel
    );

    if (!selectedActivity) {
      return;
    }

    const totalCalories =
      basal * selectedActivity.factor;

    setBasalMetabolism(roundCalories(basal));
    setResult(roundCalories(totalCalories));
  };

  return (
    <div className="calorie-burn">
      <Helmet>
        <title>消費カロリー計算｜1日の消費カロリーを計算</title>
        <meta
          name="description"
          content="年齢、性別、身長、体重、活動量から1日の消費カロリーの目安を計算できます。ダイエットや体重管理の参考に利用できます。"
        />
      </Helmet>
      <section className="calorie-burn__header">
        <h1>消費カロリー計算</h1>
        <p>
          年齢・性別・身長・体重と身体活動レベルから、
          1日の消費カロリーの目安を計算します。
        </p>
      </section>

      <CalculatorCard
        title="1日の消費カロリーを計算"
        description="以下の項目を入力してください。"
      >
        <div className="calorie-burn__gender">
          <p className="calorie-burn__label">
            性別
          </p>

          <div className="calorie-burn__gender-options">
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
          id="calorie-burn-age"
          label="年齢"
          value={age}
          unit="歳"
          placeholder="例：30"
          onChange={setAge}
        />

        <NumberInput
          id="calorie-burn-height"
          label="身長"
          value={height}
          unit="cm"
          placeholder="例：170"
          onChange={setHeight}
        />

        <NumberInput
          id="calorie-burn-weight"
          label="体重"
          value={weight}
          unit="kg"
          placeholder="例：65"
          onChange={setWeight}
        />

        <div className="calorie-burn__activity">
          <p className="calorie-burn__label">
            身体活動レベル
          </p>

          <div className="calorie-burn__activity-options">
            {activityLevels.map((activity) => (
              <label
                key={activity.id}
                className={
                  activityLevel === activity.id
                    ? "is-selected"
                    : ""
                }
              >
                <input
                  type="radio"
                  name="activityLevel"
                  value={activity.id}
                  checked={
                    activityLevel === activity.id
                  }
                  onChange={() =>
                    setActivityLevel(activity.id)
                  }
                />

                <span className="calorie-burn__activity-content">
                  <strong>{activity.label}</strong>
                  <small>
                    {activity.description}
                  </small>
                </span>
              </label>
            ))}
          </div>
        </div>

        {error && (
          <p className="calorie-burn__error">
            {error}
          </p>
        )}

        <CalculateButton onClick={handleCalculate}>
          消費カロリーを計算する
        </CalculateButton>
      </CalculatorCard>

      {result !== null && (
        <div className="calorie-burn__results">
          <ResultCard
            label="1日の消費カロリーの目安"
            value={`${result.toLocaleString()} kcal/日`}
            links={[
              {
                to: "/calorie-intake",
                label: "摂取カロリーの目安も計算する →",
              },
            ]}
          />

          {basalMetabolism !== null && (
            <div className="calorie-burn__basal">
              <p>
                基礎代謝量の目安：
                <strong>
                  {basalMetabolism.toLocaleString()} kcal/日
                </strong>
              </p>
            </div>
          )}
        </div>
      )}

      <section className="calorie-burn__section">
        <h2>消費カロリーとは？</h2>

        <p>
          1日の消費カロリーは、基礎代謝に加えて、
          歩行や仕事、運動などの日常生活で消費する
          エネルギーを含めた1日の消費量の目安です。
        </p>

        <p>
          同じ年齢・身長・体重でも、日常の活動量によって
          消費カロリーは変わります。
          そのため、この計算では身体活動レベルを選択します。
        </p>
      </section>

      <section className="calorie-burn__section">
        <h2>身体活動レベルについて</h2>

        <div className="calorie-burn__activity-info">
          {activityLevels.map((activity) => (
            <div
              key={activity.id}
              className="calorie-burn__activity-info-item"
            >
              <h3>{activity.label}</h3>
              <p>{activity.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="calorie-burn__section">
        <h2>計算結果について</h2>

        <p>
          計算結果はあくまで推定値です。
          実際のエネルギー消費量には個人差があります。
        </p>

        <p>
          ダイエットや体重管理を行う場合は、
          計算結果だけでなく、体重の変化や日々の体調なども
          あわせて確認することをおすすめします。
        </p>
      </section>
      <section className="calorie-burn__section">
        <CalculatorLinks
          links={[
            { to: "/basal-metabolism", label: "基礎代謝を計算する" },
            { to: "/calorie-intake", label: "摂取カロリーを計算する" },
            { to: "/calorie-balance", label: "カロリー収支を計算する" },
            { to: "/diet-period", label: "ダイエット期間を計算する" },
          ]}
        />
      </section>
    </div>
  );
};

export default CalorieBurn;
