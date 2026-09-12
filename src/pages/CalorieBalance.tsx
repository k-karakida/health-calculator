import { useState } from "react";
import CalculatorCard from "../components/calculator/CalculatorCard";
import NumberInput from "../components/calculator/NumberInput";
import CalculateButton from "../components/calculator/CalculateButton";
import ResultCard from "../components/calculator/ResultCard";
import "./CalorieBalance.css";

// カロリー収支計算のページ
const CalorieBalance = () => {
  const [intakeCalories, setIntakeCalories] =
    useState("");

  const [burnCalories, setBurnCalories] =
    useState("");

  const [result, setResult] =
    useState<number | null>(null);

  const [error, setError] = useState("");

  const handleCalculate = () => {
    const intake = Number(intakeCalories);
    const burn = Number(burnCalories);

    if (
      !intakeCalories ||
      !burnCalories ||
      intake < 0 ||
      burn < 0
    ) {
      setResult(null);
      setError("正しい値を入力してください");
      return;
    }

    setError("");
    const balance = intake - burn;

    setResult(Math.round(balance));
  };

  const getResultLabel = () => {
    if (result === null) {
      return "";
    }

    if (result > 0) {
      return "カロリー収支はプラスです";
    }

    if (result < 0) {
      return "カロリー収支はマイナスです";
    }

    return "カロリー収支はほぼゼロです";
  };

  const getResultDescription = () => {
    if (result === null) {
      return "";
    }

    if (result > 0) {
      return "摂取カロリーが消費カロリーを上回っています。";
    }

    if (result < 0) {
      return "消費カロリーが摂取カロリーを上回っています。";
    }

    return "摂取カロリーと消費カロリーがほぼ同じです。";
  };

  const getResultClass = () => {
    if (result === null) {
      return "";
    }

    if (result > 0) {
      return "is-positive";
    }

    if (result < 0) {
      return "is-negative";
    }

    return "is-balanced";
  };

  return (
    <div className="calorie-balance">
      <section className="calorie-balance__header">
        <h1>カロリー収支計算</h1>

        <p>
          1日の摂取カロリーと消費カロリーから、
          カロリー収支の目安を計算します。
        </p>
      </section>

      <CalculatorCard
        title="カロリー収支を計算"
        description="1日の摂取カロリーと消費カロリーを入力してください。"
      >
        <NumberInput
          id="intake-calories"
          label="摂取カロリー"
          value={intakeCalories}
          unit="kcal"
          placeholder="例：2000"
          onChange={setIntakeCalories}
        />

        <NumberInput
          id="burn-calories"
          label="消費カロリー"
          value={burnCalories}
          unit="kcal"
          placeholder="例：2300"
          onChange={setBurnCalories}
        />

        {error && (
          <p className="calorie-balance__error">
            {error}
          </p>
        )}

        <CalculateButton onClick={handleCalculate}>
          カロリー収支を計算する
        </CalculateButton>
      </CalculatorCard>

      {result !== null && (
        <div className="calorie-balance__results">
          <div
            className={`calorie-balance__result-status ${getResultClass()}`}
          >
            <p className="calorie-balance__result-status-label">
              {getResultLabel()}
            </p>

            <p className="calorie-balance__result-status-description">
              {getResultDescription()}
            </p>
          </div>

          <ResultCard
            label="カロリー収支"
            value={`${
              result > 0 ? "+" : ""
            }${result.toLocaleString()} kcal/日`}
            links={[
              {
                to: "/calorie-intake",
                label: "摂取カロリーの目安を計算する →",
              },
              {
                to: "/calorie-burn",
                label: "消費カロリーの目安を計算する →",
              },
            ]}
          />
        </div>
      )}

      <section className="calorie-balance__section">
        <h2>カロリー収支とは？</h2>

        <p>
          カロリー収支とは、1日に摂取したエネルギーと、
          消費したエネルギーの差のことです。
        </p>

        <div className="calorie-balance__formula">
          <span>摂取カロリー</span>
          <strong>−</strong>
          <span>消費カロリー</span>
          <strong>＝</strong>
          <span>カロリー収支</span>
        </div>
      </section>

      <section className="calorie-balance__section">
        <h2>カロリー収支の見方</h2>

        <div className="calorie-balance__guide">
          <div className="calorie-balance__guide-item">
            <h3>プラスの場合</h3>

            <p>
              摂取カロリーが消費カロリーを上回っています。
              長期的にプラスの状態が続くと、
              体重増加につながる可能性があります。
            </p>
          </div>

          <div className="calorie-balance__guide-item">
            <h3>マイナスの場合</h3>

            <p>
              消費カロリーが摂取カロリーを上回っています。
              長期的にマイナスの状態が続くと、
              体重減少につながる可能性があります。
            </p>
          </div>

          <div className="calorie-balance__guide-item">
            <h3>ほぼゼロの場合</h3>

            <p>
              摂取カロリーと消費カロリーがほぼ同じ状態です。
              現在の体重を維持する際の目安のひとつになります。
            </p>
          </div>
        </div>
      </section>

      <section className="calorie-balance__section">
        <h2>計算結果について</h2>

        <p>
          カロリー収支は、体重管理を考える際の
          ひとつの目安です。
        </p>

        <p>
          実際のエネルギー消費量や体重の変化には個人差があり、
          計算結果と実際の変化が一致するとは限りません。
        </p>

        <p>
          極端な食事制限などは避け、
          栄養バランスや体調にも注意しながら
          体重を管理することが大切です。
        </p>
      </section>
    </div>
  );
};

export default CalorieBalance;
