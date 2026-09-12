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
import "./CalorieIntake.css";

type ActivityLevel = {
  id: string;
  label: string;
  description: string;
  factor: number;
};

type Goal = {
  id: string;
  label: string;
  description: string;
  adjustment: number;
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

const goals: Goal[] = [
  {
    id: "maintain",
    label: "体重を維持したい",
    description: "現在の体重を維持する目安",
    adjustment: 0,
  },
  {
    id: "slow-loss",
    label: "ゆるやかに減らしたい",
    description: "消費カロリーから約300 kcal減らす目安",
    adjustment: -300,
  },
  {
    id: "loss",
    label: "減量したい",
    description: "消費カロリーから約500 kcal減らす目安",
    adjustment: -500,
  },
];

// 摂取カロリー計算のページ
const CalorieIntake = () => {
  const [gender, setGender] = useState<Gender>("male");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [activityLevel, setActivityLevel] = useState("normal");
  const [goal, setGoal] = useState("slow-loss");

  const [result, setResult] = useState<number | null>(null);
  const [calorieBurn, setCalorieBurn] = useState<number | null>(null);
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
      setCalorieBurn(null);
      setError("正しい値を入力してください");
      return;
    }

    setError("");

    const selectedActivity = activityLevels.find(
      (activity) => activity.id === activityLevel
    );

    const selectedGoal = goals.find(
      (item) => item.id === goal
    );

    if (!selectedActivity || !selectedGoal) {
      return;
    }

    const basalMetabolism = calculateBasalMetabolism(
      gender,
      ageValue,
      heightValue,
      weightValue
    );

    const totalCalories =
      basalMetabolism * selectedActivity.factor;

    const targetCalories =
      totalCalories + selectedGoal.adjustment;

    setCalorieBurn(roundCalories(totalCalories));
    setResult(Math.max(0, roundCalories(targetCalories)));
  };

  return (
    <div className="calorie-intake">
      <section className="calorie-intake__header">
        <h1>摂取カロリー計算</h1>
        <p>
          1日の消費カロリーと目標から、
          1日の摂取カロリーの目安を計算します。
        </p>
      </section>

      <CalculatorCard
        title="1日の摂取カロリーを計算"
        description="以下の項目を入力してください。"
      >
        <div className="calorie-intake__gender">
          <p className="calorie-intake__label">
            性別
          </p>

          <div className="calorie-intake__gender-options">
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
          id="calorie-intake-age"
          label="年齢"
          value={age}
          unit="歳"
          placeholder="例：30"
          onChange={setAge}
        />

        <NumberInput
          id="calorie-intake-height"
          label="身長"
          value={height}
          unit="cm"
          placeholder="例：170"
          onChange={setHeight}
        />

        <NumberInput
          id="calorie-intake-weight"
          label="体重"
          value={weight}
          unit="kg"
          placeholder="例：65"
          onChange={setWeight}
        />

        <div className="calorie-intake__activity">
          <p className="calorie-intake__label">
            身体活動レベル
          </p>

          <div className="calorie-intake__activity-options">
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

                <span className="calorie-intake__activity-content">
                  <strong>{activity.label}</strong>
                  <small>
                    {activity.description}
                  </small>
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="calorie-intake__goal">
          <p className="calorie-intake__label">
            体重管理の目標
          </p>

          <div className="calorie-intake__goal-options">
            {goals.map((item) => (
              <label
                key={item.id}
                className={
                  goal === item.id
                    ? "is-selected"
                    : ""
                }
              >
                <input
                  type="radio"
                  name="goal"
                  value={item.id}
                  checked={goal === item.id}
                  onChange={() => setGoal(item.id)}
                />

                <span className="calorie-intake__goal-content">
                  <strong>{item.label}</strong>
                  <small>
                    {item.description}
                  </small>
                </span>
              </label>
            ))}
          </div>
        </div>

        {error && (
          <p className="calorie-intake__error">
            {error}
          </p>
        )}

        <CalculateButton onClick={handleCalculate}>
          摂取カロリーを計算する
        </CalculateButton>
      </CalculatorCard>

      {result !== null && (
        <div className="calorie-intake__results">
          <ResultCard
            label="1日の摂取カロリーの目安"
            value={`${result.toLocaleString()} kcal/日`}
            links={[
              {
                to: "/calorie-balance",
                label: "カロリー収支も計算する →",
              },
            ]}
          />

          {calorieBurn !== null && (
            <div className="calorie-intake__burn">
              <p>
                1日の消費カロリーの目安：
                <strong>
                  {calorieBurn.toLocaleString()} kcal/日
                </strong>
              </p>
            </div>
          )}
        </div>
      )}

      <section className="calorie-intake__section">
        <h2>摂取カロリーとは？</h2>

        <p>
          摂取カロリーとは、食事や飲み物などから
          体に取り入れるエネルギーのことです。
        </p>

        <p>
          体重を管理する場合は、摂取カロリーだけでなく、
          基礎代謝や日常生活、運動などによる
          消費カロリーも考える必要があります。
        </p>
      </section>

      <section className="calorie-intake__section">
        <h2>この計算について</h2>

        <p>
          このページでは、推定した1日の消費カロリーを
          基準にして、体重維持または減量を目的とした
          摂取カロリーの目安を計算しています。
        </p>

        <p>
          実際に必要なエネルギー量には個人差があります。
          計算結果は健康管理や体重管理の参考として
          ご利用ください。
        </p>
      </section>

      <section className="calorie-intake__section">
        <h2>無理なカロリー制限に注意</h2>

        <p>
          極端に食事量を減らすことは、健康を損なう
          おそれがあります。
          摂取カロリーを大幅に減らすのではなく、
          栄養バランスや体調にも注意しながら
          体重を管理することが大切です。
        </p>
      </section>
    </div>
  );
};

export default CalorieIntake;
