import "./InfoPage.css";
const Contact = () => {
  return (
    <div className="info-page">
      <h1>お問い合わせ</h1>

      <section>
        <h2>お問い合わせについて</h2>
        <p>
          当サイトに関するご質問、ご意見、ご報告などがございましたら、
          以下のメールアドレスまでお問い合わせください。
        </p>

        <p>
          メールアドレス：
          <a href="mailto:irodori.base202609@gmail.com">
            irodori.base202609@gmail.com
          </a>
        </p>
      </section>

      <section>
        <h2>お問い合わせの際のお願い</h2>
        <p>
          お問い合わせ内容によっては、回答までに時間がかかる場合があります。
        </p>
        <p>
          また、すべてのお問い合わせに回答できない場合がありますので、
          あらかじめご了承ください。
        </p>
      </section>
    </div>
  );
};

export default Contact;