// * Time complexity: O(n^2)
// * Space complexity: O(1)
export const bubbleSort = <T>(items: Array<T>): Array<T> => {
  for (let count = 0; count < items.length; count++) {
    for (let i = 0; i < items.length - 1; i++) {
      if (items[i] > items[i + 1]) {
        [items[i], items[i + 1]] = [items[i + 1], items[i]];
      }
    }
  }

  return items;
};