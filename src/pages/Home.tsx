import { useState } from "react";
import { Link } from "react-router-dom";

import CalculatorCard from "../components/calculator/CalculatorCard";
import NumberInput from "../components/calculator/NumberInput";
import CalculateButton from "../components/calculator/CalculateButton";
import ResultCard from "../components/calculator/ResultCard";

import { calculateBmi, getBmiCategory } from "../utils/bmi";

import "../components/calculator/Calculator.css";
import "./Home.css";

const Home = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const [bmi, setBmi] = useState<number | null>(null);

  const handleCalculate = () => {
    const heightValue = Number(height);
    const weightValue = Number(weight);

    if (
      !height ||
      !weight ||
      heightValue <= 0 ||
      weightValue <= 0
    ) {
      return;
    }

    const result = calculateBmi(
      heightValue,
      weightValue
    );

    setBmi(result);
  };

    const category =
      bmi !== null
        ? getBmiCategory(bmi)
        : null;

  return (
    <div className="home">

      {/* =========================
          Hero
      ========================= */}

      <section className="home__hero">
        <div className="home__hero-inner">

          <p className="home__eyebrow">
            HEALTH CALCULATOR
          </p>

          <h1 className="home__title">
            からだの数字を
            <br />
            かんたん計算
          </h1>

          <p className="home__description">
            BMIや体重など、からだに関する数値を
            <br className="home__br-pc" />
            無料でかんたんに計算できます。
          </p>


          {/* =========================
              BMI Calculator
          ========================= */}

          <CalculatorCard
            title="BMIを計算"
            description="身長と体重を入力してください。"
          >

            <NumberInput
              id="height"
              label="身長"
              value={height}
              unit="cm"
              placeholder="170"
              onChange={setHeight}
            />

            <NumberInput
              id="weight"
              label="体重"
              value={weight}
              unit="kg"
              placeholder="65"
              onChange={setWeight}
            />

            <CalculateButton
              onClick={handleCalculate}
            >
              BMIを計算する
            </CalculateButton>

          </CalculatorCard>


          {/* =========================
              Result
          ========================= */}

          {bmi !== null && category !== null && (
            <ResultCard
              label="あなたのBMI"
              value={bmi.toFixed(1)}
              category={category.label}
              categoryColor={category.color}
              links={[
                {
                  to: "/ideal-weight",
                  label: "適正体重を見る",
                },
                {
                  to: "/bmi-table",
                  label: "BMI早見表を見る",
                },
              ]}
            />
          )}

        </div>
      </section>


      {/* =========================
          Tools
      ========================= */}

      <section className="home__tools">

        <div className="home__section-inner">

          <div className="home__section-heading">

            <p className="home__section-eyebrow">
              TOOLS
            </p>

            <h2>
              その他の計算ツール
            </h2>

            <p>
              からだに関する数値を
              かんたんに確認できます。
            </p>

          </div>


          <div className="home__tool-grid">

            <Link
              to="/ideal-weight"
              className="home__tool-card"
            >
              <span className="home__tool-icon">
                ⚖
              </span>

              <span className="home__tool-title">
                適正体重計算
              </span>

              <span className="home__tool-description">
                身長から標準体重を計算します。
              </span>

              <span className="home__tool-arrow">
                →
              </span>
            </Link>


            <Link
              to="/bmi-table"
              className="home__tool-card"
            >
              <span className="home__tool-icon">
                ▤
              </span>

              <span className="home__tool-title">
                BMI早見表
              </span>

              <span className="home__tool-description">
                身長と体重からBMIを一覧で確認できます。
              </span>

              <span className="home__tool-arrow">
                →
              </span>
            </Link>


            <Link
              to="/height-weight"
              className="home__tool-card"
            >
              <span className="home__tool-icon">
                ↕
              </span>

              <span className="home__tool-title">
                身長別体重表
              </span>

              <span className="home__tool-description">
                身長ごとのBMI別体重を確認できます。
              </span>

              <span className="home__tool-arrow">
                →
              </span>
            </Link>

          </div>

        </div>

      </section>


      {/* =========================
          About
      ========================= */}

      <section className="home__about">

        <div className="home__about-inner">

          <p className="home__section-eyebrow">
            ABOUT
          </p>

          <h2>
            からだの数字を
            <br />
            もっと身近に。
          </h2>

          <p>
            からだ計算ツールは、BMIや体重などの
            <br className="home__br-pc" />
            数値をかんたんに確認できる無料ツールです。
          </p>

        </div>

      </section>

    </div>
  );
};

export default Home;