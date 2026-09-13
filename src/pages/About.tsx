import { Helmet } from "react-helmet-async";

import "./InfoPage.css";

const About = () => {
  return (
    <div className="info-page">
      <Helmet>
        <title>このサイトについて｜からだ計算ツール</title>
        <meta
          name="description"
          content="からだ計算ツールについて、サイトの目的や提供している計算ツールについて紹介しています。"
        />
      </Helmet>
      <h1>サイトについて</h1>

      <section>
        <h2>このサイトについて</h2>
        <p>
          当サイトは、BMIや体重などの健康に関する計算を
          かんたんに行えるツールを提供するWebサイトです。
        </p>
      </section>

      <section>
        <h2>サイトの目的</h2>
        <p>
          身長や体重などの数値を入力することで、
          BMIや標準体重などを手軽に確認できるようにすることを目的としています。
        </p>
      </section>

      <section>
        <h2>ご利用について</h2>
        <p>
          当サイトの計算結果や掲載情報は、健康管理の参考としてご利用ください。
        </p>
        <p>
          医療上の診断や治療を目的としたものではありません。
        </p>
      </section>
    </div>
  );
};

export default About;