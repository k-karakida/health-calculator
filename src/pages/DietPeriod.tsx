import { useState } from "react";
import CalculatorCard from "../components/calculator/CalculatorCard";
import NumberInput from "../components/calculator/NumberInput";
import CalculateButton from "../components/calculator/CalculateButton";
import ResultCard from "../components/calculator/ResultCard";
import "./DietPeriod.css";

const DietPeriod = () => {
  const [currentWeight, setCurrentWeight] = useState("");
  const [targetWeight, setTargetWeight] = useState("");
  const [weeklyLoss, setWeeklyLoss] = useState("0.5");

  const [resultWeeks, setResultWeeks] = useState<number | null>(null);
  const [resultMonths, setResultMonths] = useState<number | null>(null);

  const handleCalculate = () => {
    const current = Number(currentWeight);
    const target = Number(targetWeight);
    const lossPerWeek = Number(weeklyLoss);

    if (
      !currentWeight ||
      !targetWeight ||
      !weeklyLoss ||
      current <= 0 ||
      target <= 0 ||
      lossPerWeek <= 0 ||
      target >= current
    ) {
      setResultWeeks(null);
      setResultMonths(null);
      return;
    }

    const weightDifference = current - target;

    const weeks = weightDifference / lossPerWeek;
    const months = weeks / 4.345;

    setResultWeeks(Math.ceil(weeks));
    setResultMonths(Math.round(months * 10) / 10);
  };

  return (
    <div className="diet-period">
      <section className="diet-period__header">
        <h1>ダイエット期間計算</h1>
        <p>
          現在の体重・目標体重・減量ペースから、
          目標体重までの期間の目安を計算します。
        </p>
      </section>

      <CalculatorCard
        title="ダイエット期間を計算"
        description="以下の項目を入力してください。"
      >
        <NumberInput
          id="diet-period-current-weight"
          label="現在の体重"
          value={currentWeight}
          unit="kg"
          placeholder="例：65"
          onChange={setCurrentWeight}
        />

        <NumberInput
          id="diet-period-target-weight"
          label="目標体重"
          value={targetWeight}
          unit="kg"
          placeholder="例：60"
          onChange={setTargetWeight}
        />

        <div className="diet-period__weekly-loss">
          <p className="diet-period__label">
            1週間の減量目標
          </p>

          <div className="diet-period__weekly-options">
            <label
              className={
                weeklyLoss === "0.25"
                  ? "is-selected"
                  : ""
              }
            >
              <input
                type="radio"
                name="weeklyLoss"
                value="0.25"
                checked={weeklyLoss === "0.25"}
                onChange={(e) =>
                  setWeeklyLoss(e.target.value)
                }
              />
              <span>
                <strong>0.25 kg</strong>
                <small>ゆっくり減量</small>
              </span>
            </label>

            <label
              className={
                weeklyLoss === "0.5"
                  ? "is-selected"
                  : ""
              }
            >
              <input
                type="radio"
                name="weeklyLoss"
                value="0.5"
                checked={weeklyLoss === "0.5"}
                onChange={(e) =>
                  setWeeklyLoss(e.target.value)
                }
              />
              <span>
                <strong>0.5 kg</strong>
                <small>標準的なペース</small>
              </span>
            </label>

            <label
              className={
                weeklyLoss === "0.75"
                  ? "is-selected"
                  : ""
              }
            >
              <input
                type="radio"
                name="weeklyLoss"
                value="0.75"
                checked={weeklyLoss === "0.75"}
                onChange={(e) =>
                  setWeeklyLoss(e.target.value)
                }
              />
              <span>
                <strong>0.75 kg</strong>
                <small>やや速めのペース</small>
              </span>
            </label>
          </div>
        </div>

        <CalculateButton onClick={handleCalculate}>
          ダイエット期間を計算する
        </CalculateButton>
      </CalculatorCard>

      {resultWeeks !== null && resultMonths !== null && (
        <ResultCard
          label="目標体重までの期間の目安"
          value={`${resultWeeks}週間`}
          links={[
            {
              to: "/calorie-intake",
              label: "摂取カロリーの目安を計算する →",
            },
            {
              to: "/calorie-balance",
              label: "カロリー収支を計算する →",
            },
          ]}
        />
      )}

      {resultWeeks !== null && resultMonths !== null && (
        <div className="diet-period__sub-result">
          <p>
            約<strong>{resultMonths}か月</strong>が目安です。
          </p>
        </div>
      )}

      <section className="diet-period__section">
        <h2>ダイエット期間の計算方法</h2>

        <p>
          このページでは、現在の体重と目標体重の差を、
          1週間あたりの減量目標で割って、
          目標体重までのおおよその期間を計算しています。
        </p>

        <div className="diet-period__formula">
          <span>減らす体重</span>
          <strong>÷</strong>
          <span>1週間の減量目標</span>
          <strong>＝</strong>
          <span>必要な週数</span>
        </div>
      </section>

      <section className="diet-period__section">
        <h2>計算例</h2>

        <div className="diet-period__example">
          <p>
            現在の体重が65kg、目標体重が60kg、
            1週間の減量目標を0.5kgとした場合、
          </p>

          <div className="diet-period__example-formula">
            <strong>（65kg − 60kg）÷ 0.5kg</strong>
            <span>＝ 10週間</span>
          </div>

          <p>
            この場合、目標体重までの期間は
            <strong>約10週間</strong>が目安になります。
          </p>
        </div>
      </section>

      <section className="diet-period__section">
        <h2>計算結果について</h2>

        <p>
          実際の体重の変化は、食事内容・身体活動量・
          体組成・水分量など、さまざまな要因によって変わります。
        </p>

        <p>
          そのため、この計算結果はあくまで期間の目安であり、
          実際に同じペースで体重が減少することを保証するものではありません。
        </p>

        <p>
          無理な食事制限や急激な減量は避け、
          健康状態や体調にも注意しながら
          体重管理を行うことをおすすめします。
        </p>
      </section>
    </div>
  );
};

export default DietPeriod;