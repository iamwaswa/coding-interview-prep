
export const fibonacci = (): ((index: number) => number) => {
  const cache = new Map<number, number>();
  cache.set(0, 0);
  cache.set(1, 1);
  cache.set(2, 1);

  const fibonacciRecursive = (index: number): number => {
    if (cache.has(index)) {
      return cache.get(index);
    }
  
    return cache.set(
      index, 
      fibonacciRecursive(index - 1) + fibonacciRecursive(index - 2)
      )
      .get(index);
  }

  return fibonacciRecursive;
}