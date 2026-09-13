import { Helmet } from "react-helmet-async";

import CalculatorLinks from "../components/calculator/CalculatorLinks";

import { calculateBmi } from "../utils/bmi";

import "./BmiTable.css";

const heights = [
  130,
  135,
  140,
  145,
  150,
  155,
  160,
  165,
  170,
  175,
  180,
  185,
  190,
  195,
  200
];

const weights = [
  30,
  35,
  40,
  45,
  50,
  55,
  60,
  65,
  70,
  75,
  80,
  85,
  90,
  95,
  100,
];

const BmiTable = () => {
  return (
    <div className="bmi-table-page">
      <Helmet>
        <title>BMI早見表｜身長・体重別のBMI一覧｜からだ計算ツール</title>
        <meta
          name="description"
          content="身長と体重からBMIの目安を確認できるBMI早見表です。BMIの判定基準も一覧で確認できます。"
        />
      </Helmet>

      <section className="bmi-table-page__hero">

        <p className="bmi-table-page__eyebrow">
          BMI TABLE
        </p>

        <h1>BMI早見表</h1>

        <p>
          身長と体重からBMIの目安を一覧で確認できます。
        </p>

      </section>

      <section className="bmi-table-page__content">

        <div className="bmi-table">

          <table>

            <thead>
              <tr>
                <th>身長＼体重</th>

                {weights.map((weight) => (
                  <th key={weight}>
                    {weight}kg
                  </th>
                ))}

              </tr>
            </thead>

            <tbody>

              {heights.map((height) => (
                <tr key={height}>

                  <th>{height}cm</th>

                  {weights.map((weight) => {

                    const bmi = calculateBmi(
                      height,
                      weight
                    );

                    return (
                      <td key={weight}>
                        {bmi.toFixed(1)}
                      </td>
                    );
                  })}

                </tr>
              ))}

            </tbody>

          </table>

        </div>
      </section>

      <section className="bmi-table-page__content">
        <h2>BMIの目安</h2>

        <ul>
          <li>18.5未満：低体重</li>
          <li>18.5以上25未満：普通体重</li>
          <li>25以上30未満：肥満（1度）</li>
          <li>30以上35未満：肥満（2度）</li>
          <li>35以上：肥満（3度）</li>
        </ul>

      </section>

      <section className="bmi-table-page__content">
        <h2>BMIの見方</h2>

        <p>
          BMIは、身長と体重から体格の目安を確認するための指標です。
        </p>

        <p>
          BMIの数値だけで健康状態を判断できるものではなく、
          年齢や体脂肪率、筋肉量、生活習慣などによっても
          身体の状態は異なります。
        </p>

        <p>
          BMI早見表は、自分の身長と体重からBMIの目安を
          簡単に確認するためにご利用ください。
        </p>
      </section>

      <section className="bmi-table-page__content">
        <h2>BMI早見表の使い方</h2>

        <p>
          自分の身長に近い行から体重を確認し、
          交差する部分のBMIを目安としてご確認ください。
        </p>

        <p>
          より正確なBMIを確認したい場合は、
          BMI計算ツールをご利用ください。
        </p>
      </section>

      <section className="bmi-table-page__content">
        <CalculatorLinks
          links={[
            { to: "/bmi", label: "BMIを計算する" },
            { to: "/ideal-weight", label: "適正体重を計算する" },
            { to: "/height-weight", label: "身長別体重目安を見る" },
          ]}
        />
      </section>

    </div>
  );
};

export default BmiTable;