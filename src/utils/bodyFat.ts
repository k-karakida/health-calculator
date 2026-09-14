export type Gender = "male" | "female";

export const calculateBodyFat = (
  gender: Gender,
  age: number,
  heightCm: number,
  weightKg: number
): number => {
  const heightM = heightCm / 100;

  const bmi = weightKg / (heightM * heightM);

  const sex = gender === "male" ? 1 : 0;

  const bodyFat =
    1.2 * bmi +
    0.23 * age -
    10.8 * sex -
    5.4;

  return bodyFat;
};

export const roundBodyFat = (bodyFat: number): number => {
  return Math.round(bodyFat * 10) / 10;
};