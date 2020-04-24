export const factorialRecursive = (num: number): number => {
  if (num <= 0) {
    throw new Error(`Number must be greater than 0`);
  }

  return num === 1 ? num : num * factorialRecursive(num - 1);
};

export const factorialIterative = (num: number): number => {
  if (num <= 0) {
    throw new Error(`Number must be greater than 0`);
  }

  let result = 1;
  for (let factorial = 2; factorial <= num; factorial++) {
    result *= factorial;
  }

  return result;
};