import { useState, useMemo, type JSX } from "react";

interface BmiCategory {
  label: string;
  max: number;
  color: string;
  description: string;
}

const CATEGORIES: BmiCategory[] = [
  {
    label: "低体重",
    max: 18.5,
    color: "#5B8AA6",
    description:
      "標準よりやせ型です。栄養バランスの取れた食事を意識し、必要に応じて筋肉量を増やすことも検討しましょう。",
  },
  {
    label: "標準",
    max: 25,
    color: "#2B6355",
    description:
      "統計上、生活習慣病のリスクが最も低いとされる範囲です。今の体重を維持していきましょう。",
  },
  {
    label: "肥満(1度)",
    max: 30,
    color: "#C97A3A",
    description:
      "標準よりやや高めです。食生活の見直しや適度な運動習慣を取り入れることをおすすめします。",
  },
  {
    label: "肥満(2度以上)",
    max: Infinity,
    color: "#B4483A",
    description:
      "健康リスクが高まる範囲です。生活習慣の改善に加えて、医師や専門家への相談も検討してください。",
  },
];

function getCategory(bmi: number): BmiCategory {
  return CATEGORIES.find((c) => bmi < c.max) ?? CATEGORIES[CATEGORIES.length - 1];
}

export default function BMICalculator(): JSX.Element {
  const [heightCm, setHeightCm] = useState<number>(165);
  const [weightKg, setWeightKg] = useState<number>(60);

  const bmi = useMemo<number>(() => {
    const h = heightCm / 100;
    return weightKg / (h * h);
  }, [heightCm, weightKg]);

  const bmiRounded = Math.round(bmi * 10) / 10;
  const category = getCategory(bmi);

  // position marker along a 15–35 scale
  const scaleMin = 15;
  const scaleMax = 35;
  const markerPct = Math.min(
    100,
    Math.max(0, ((bmi - scaleMin) / (scaleMax - scaleMin)) * 100)
  );

  return (
    <div className="min-h-full w-full flex items-center justify-center bg-[#EEF2ED] p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-[#DDE5DC] p-8">
        <h1 className="text-lg font-medium text-[#1F2A24] tracking-tight">
          BMI計算
        </h1>
        <p className="text-sm text-[#5B6B62] mt-1 mb-8">
          身長と体重を入力してください
        </p>

        {/* Height slider */}
        <div className="mb-6">
          <div className="flex items-baseline justify-between mb-2">
            <label className="text-sm text-[#5B6B62]">身長</label>
            <span className="text-2xl font-serif text-[#1F2A24]">
              {heightCm}
              <span className="text-sm text-[#5B6B62] font-sans ml-1">cm</span>
            </span>
          </div>
          <input
            type="range"
            min={120}
            max={210}
            value={heightCm}
            onChange={(e) => setHeightCm(Number(e.target.value))}
            className="w-full accent-[#2B6355]"
          />
        </div>

        {/* Weight slider */}
        <div className="mb-8">
          <div className="flex items-baseline justify-between mb-2">
            <label className="text-sm text-[#5B6B62]">体重</label>
            <span className="text-2xl font-serif text-[#1F2A24]">
              {weightKg}
              <span className="text-sm text-[#5B6B62] font-sans ml-1">kg</span>
            </span>
          </div>
          <input
            type="range"
            min={30}
            max={150}
            value={weightKg}
            onChange={(e) => setWeightKg(Number(e.target.value))}
            className="w-full accent-[#2B6355]"
          />
        </div>

        {/* Result */}
        <div className="border-t border-[#EAEFE9] pt-6">
          <div className="flex items-end justify-between">
            <div>
              <div className="text-sm text-[#5B6B62] mb-1">BMI</div>
              <div
                className="text-5xl font-serif leading-none"
                style={{ color: category.color }}
              >
                {bmiRounded}
              </div>
            </div>
            <div
              className="text-sm font-medium px-3 py-1 rounded-full"
              style={{
                color: category.color,
                backgroundColor: category.color + "1A",
              }}
            >
              {category.label}
            </div>
          </div>

          {/* Scale bar */}
          <div className="mt-6">
            <div className="relative h-2 rounded-full overflow-hidden flex">
              {CATEGORIES.map((c, i) => {
                const prevMax = i === 0 ? scaleMin : CATEGORIES[i - 1].max;
                const width =
                  ((Math.min(c.max, scaleMax) - Math.max(prevMax, scaleMin)) /
                    (scaleMax - scaleMin)) *
                  100;
                return (
                  <div
                    key={c.label}
                    style={{ width: `${Math.max(0, width)}%`, backgroundColor: c.color }}
                  />
                );
              })}
            </div>
            <div
              className="relative w-2 h-2 -mt-2 rounded-full bg-[#1F2A24] border-2 border-white shadow"
              style={{ marginLeft: `calc(${markerPct}% - 4px)` }}
            />
          </div>

          {/* Description */}
          <p className="mt-5 text-sm leading-relaxed text-[#3E473F]">
            {category.description}
          </p>
        </div>
      </div>
    </div>
  );
}
