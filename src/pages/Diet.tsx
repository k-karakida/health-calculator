import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import CalculatorLinks from "../components/calculator/CalculatorLinks";

import "./Diet.css";

const Diet = () => {
  return (
    <div className="diet-page">
      <Helmet>
        <title>ダイエット計算｜基礎代謝・カロリー・期間を計算</title>
        <meta
          name="description"
          content="基礎代謝、消費カロリー、摂取カロリー、カロリー収支、ダイエット期間など、ダイエットに役立つ計算ツールをまとめています。"
        />
      </Helmet>
      
      {/* ページタイトル */}
      <section className="diet-page__header">
        <h1>ダイエット計算</h1>
        <p>
          ダイエットや体重管理に役立つ計算ツールを
          まとめています。
        </p>
      </section>

      {/* 計算ツール一覧 */}
      <section className="diet-page__section">
        <h2>ダイエット計算ツール</h2>

        <div className="diet-page__cards">
          <Link
            to="/basal-metabolism"
            className="diet-page__card"
          >
            <h3>基礎代謝計算</h3>
            <p>
              年齢・性別・身長・体重から
              基礎代謝量の目安を計算します。
            </p>
            <span>計算する →</span>
          </Link>

          <Link
            to="/calorie-burn"
            className="diet-page__card"
          >
            <h3>消費カロリー計算</h3>
            <p>
              基礎代謝や活動量から
              1日の消費カロリーの目安を計算します。
            </p>
            <span>計算する →</span>
          </Link>

          <Link
            to="/calorie-intake"
            className="diet-page__card"
          >
            <h3>摂取カロリー計算</h3>
            <p>
              ダイエット中の
              1日の摂取カロリーの目安を計算します。
            </p>
            <span>計算する →</span>
          </Link>

          <Link
            to="/calorie-balance"
            className="diet-page__card"
          >
            <h3>カロリー収支計算</h3>
            <p>
              摂取カロリーと消費カロリーの差から
              カロリー収支を計算します。
            </p>
            <span>計算する →</span>
          </Link>

          <Link
            to="/diet-period"
            className="diet-page__card"
          >
            <h3>ダイエット期間計算</h3>
            <p>
              現在の体重と目標体重から
              ダイエット期間の目安を計算します。
            </p>
            <span>計算する →</span>
          </Link>
        </div>
      </section>

      {/* 注意書き */}
      <section className="diet-page__note">
        <h2>ご利用について</h2>
        <p>
          計算結果は健康管理や体重管理の参考として
          ご利用ください。
        </p>
        <p>
          個人の健康状態などによって適切な体重や
          カロリーは異なります。
        </p>
      </section>
      
      <section className="diet-page__content">
        <CalculatorLinks
          links={[
            { to: "/bmi", label: "BMIを計算する" },
            { to: "/ideal-weight", label: "適正体重を計算する" },
            { to: "/bmi-table", label: "BMI早見表を見る" },
            { to: "/height-weight", label: "身長別体重目安を見る" },
          ]}
        />
      </section>
    </div>
  );
};

export default Diet;