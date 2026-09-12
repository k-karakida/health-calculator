export type Gender = "male" | "female";

/**
 * Mifflin-St Jeor式による基礎代謝量の推定
 *
 * 男性：
 * 10 × 体重(kg) + 6.25 × 身長(cm) - 5 × 年齢 + 5
 *
 * 女性：
 * 10 × 体重(kg) + 6.25 × 身長(cm) - 5 × 年齢 - 161
 */
export const calculateBasalMetabolism = (
  gender: Gender,
  age: number,
  heightCm: number,
  weightKg: number
): number => {
  const base =
    10 * weightKg +
    6.25 * heightCm -
    5 * age;

  if (gender === "male") {
    return base + 5;
  }

  return base - 161;
};

/**
 * 基礎代謝量を四捨五入
 */
export const roundCalories = (
  calories: number
): number => {
  return Math.round(calories);
};
