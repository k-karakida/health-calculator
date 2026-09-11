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

        <div className="bmi-table-page__description">

          <h2>BMIの目安</h2>

          <ul>
            <li>18.5未満：低体重</li>
            <li>18.5以上25未満：普通体重</li>
            <li>25以上30未満：肥満（1度）</li>
            <li>30以上35未満：肥満（2度）</li>
            <li>35以上：肥満（3度）</li>
          </ul>

        </div>

      </section>

    </div>
  );
};

export default BmiTable;