import "./InfoPage.css";

const Terms = () => {
  return (
    <div className="info-page">
      <h1>利用規約</h1>

      <section>
        <h2>第1条（適用）</h2>
        <p>
          本利用規約は、当サイトが提供する各種サービスの
          利用条件を定めるものです。
        </p>
      </section>

      <section>
        <h2>第2条（サービスについて）</h2>
        <p>
          当サイトでは、BMI計算、体重計算その他の健康に関する
          計算ツールや情報を提供しています。
        </p>
      </section>

      <section>
        <h2>第3条（計算結果について）</h2>
        <p>
          当サイトの計算結果は、あくまで一定の計算式に基づく
          参考値です。
        </p>
      </section>

      <section>
        <h2>第4条（禁止事項）</h2>
        <p>
          利用者は、当サイトの運営を妨害する行為、
          不正なアクセス、その他当サイトが不適切と判断する行為を
          行ってはならないものとします。
        </p>
      </section>

      <section>
        <h2>第5条（規約の変更）</h2>
        <p>
          当サイトは、必要に応じて本利用規約を変更することがあります。
        </p>
      </section>
    </div>
  );
};

export default Terms;