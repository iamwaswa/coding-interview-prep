export const fibonacciIterative = (index: number): number => {
  if (index < 0) {
    throw new Error(`Index must be at least 0`);
  }

  if (index <= 1) {
    return index;
  }

  let result = 1;
  let prev = 1;
  let beforePrev = 0;
  for (let currentIndex = 3; currentIndex <= index; currentIndex++) {
    beforePrev = prev;
    prev = result;
    result = prev + beforePrev;
  }
  return result;
};

export const fibonacciRecursive = (index: number): number => {
  if (index < 0) {
    throw new Error(`Index must be at least 0`);
  }

  return index <= 1 
    ? index 
    : fibonacciRecursive(index - 1) 
      + fibonacciRecursive(index - 2);
};