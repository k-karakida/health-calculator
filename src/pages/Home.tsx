import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Helmet>
        <title>からだ計算ツール｜BMI・体重・カロリーを無料計算</title>
        <meta
          name="description"
          content="BMI、標準体重、基礎代謝、消費カロリー、摂取カロリーなどを無料で計算できる健康計算ツールです。"
        />
      </Helmet>
      {/* ヒーロー */}
      <section className="home__hero">
        <h1>からだ計算ツール</h1>
        <p>
          BMIや体重、カロリーなど、
          健康管理に役立つ計算をかんたんに。
        </p>
      </section>

      {/* おすすめの計算ツール */}
      <section className="home__section">
        <h2>おすすめの計算ツール</h2>

        <div className="home__cards">
          <Link
            to="/bmi"
            className="home__card home__card--featured"
          >
            <h3>BMI計算</h3>
            <p>
              身長と体重からBMIを計算します。
            </p>
            <span>計算する →</span>
          </Link>

          <Link
            to="/basal-metabolism"
            className="home__card"
          >
            <h3>基礎代謝計算</h3>
            <p>
              年齢・性別・身長・体重から基礎代謝量の目安を計算します。
            </p>
            <span>計算する →</span>
          </Link>

          {/* <Link
            to="/calorie-burn"
            className="home__card"
          >
            <h3>消費カロリー計算</h3>
            <p>
              1日の消費カロリーの目安を計算します。
            </p>
            <span>計算する →</span>
          </Link> */}
        </div>
      </section>

      {/* BMI・体重計算 */}
      <section className="home__section">
        <h2>BMI・体重計算</h2>

        <div className="home__cards">
          <Link to="/bmi" className="home__card">
            <h3>BMI計算</h3>
            <p>
              身長と体重からBMIを計算します。
            </p>
            <span>計算する →</span>
          </Link>

          <Link to="/ideal-weight" className="home__card">
            <h3>適正体重計算</h3>
            <p>
              身長から標準体重の目安を計算します。
            </p>
            <span>計算する →</span>
          </Link>

          <Link to="/bmi-table" className="home__card">
            <h3>BMI早見表</h3>
            <p>
              身長と体重からBMIの目安を一覧で確認できます。
            </p>
            <span>早見表を見る →</span>
          </Link>

          <Link to="/height-weight" className="home__card">
            <h3>身長別体重</h3>
            <p>
              身長からBMIごとの体重の目安を確認できます。
            </p>
            <span>一覧を見る →</span>
          </Link>
        </div>
      </section>

      {/* ダイエット計算 */}
      <section className="home__section">
        <h2>ダイエット計算</h2>

        <div className="home__cards">
          <Link
            to="/basal-metabolism"
            className="home__card"
          >
            <h3>基礎代謝計算</h3>
            <p>
              基礎代謝量の目安を計算します。
            </p>
            <span>計算する →</span>
          </Link>

          <Link
            to="/calorie-burn"
            className="home__card"
          >
            <h3>消費カロリー計算</h3>
            <p>
              1日の消費カロリーの目安を計算します。
            </p>
            <span>計算する →</span>
          </Link>

          <Link
            to="/calorie-intake"
            className="home__card"
          >
            <h3>摂取カロリー計算</h3>
            <p>
              ダイエット中の摂取カロリーの目安を計算します。
            </p>
            <span>計算する →</span>
          </Link>

          <Link
            to="/calorie-balance"
            className="home__card"
          >
            <h3>カロリー収支計算</h3>
            <p>
              摂取カロリーと消費カロリーの差を計算します。
            </p>
            <span>計算する →</span>
          </Link>

          <Link
            to="/diet-period"
            className="home__card"
          >
            <h3>ダイエット期間計算</h3>
            <p>
              目標体重までの期間の目安を計算します。
            </p>
            <span>計算する →</span>
          </Link>
        </div>

        {/* <div className="home__more">
          <Link to="/diet">
            ダイエット計算をすべて見る →
          </Link>
        </div> */}
      </section>

      {/* サイトについて */}
      <section className="home__about">
        <h2>からだ計算ツールについて</h2>

        <p>
          からだ計算ツールでは、BMIや体重、カロリーなど、
          健康管理に役立つ計算ツールを提供しています。
        </p>
      </section>
    </div>
  );
};

export default Home;