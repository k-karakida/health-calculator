export type BmiCategory = {
  label: string;
  min: number;
  max: number | null;
  color: string;
};

export const calculateBmi = (
  heightCm: number,
  weightKg: number
): number => {
  const heightM = heightCm / 100;
  return weightKg / (heightM * heightM);
};

export const calculateStandardWeight = (
  heightCm: number
): number => {
  const heightM = heightCm / 100;
  return 22 * heightM * heightM;
};

export const getBmiCategory = (
  bmi: number
): BmiCategory => {
  if (bmi < 18.5) {
    return {
      label: "低体重",
      min: 0,
      max: 18.5,
      color: "#64B5F6",
    };
  }

  if (bmi < 25) {
    return {
      label: "普通体重",
      min: 18.5,
      max: 25,
      color: "#4CAF7D",
    };
  }

  if (bmi < 30) {
    return {
      label: "肥満（1度）",
      min: 25,
      max: 30,
      color: "#FFB74D",
    };
  }

  if (bmi < 35) {
    return {
      label: "肥満（2度）",
      min: 30,
      max: 35,
      color: "#FF9800",
    };
  }

  if (bmi < 40) {
    return {
      label: "肥満（3度）",
      min: 35,
      max: 40,
      color: "#E57373",
    };
  }

  return {
    label: "肥満（4度）",
    min: 40,
    max: null,
    color: "#EF5350",
  };
};