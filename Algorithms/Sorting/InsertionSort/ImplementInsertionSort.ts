// * Time Complexity: O(n^2)
// * Space Complexity: O(1)
export const insertionSort = <T>(items: Array<T>): Array<T> => {
  for (let i = 0; i < items.length - 1; i++) {
    for (let j = i; j >= 0; j--) {
      if (items[j] > items[j + 1]) {
        [items[j], items[j + 1]] = [items[j + 1], items[j]];
      } else {
        break;
      }
    }  
  }

  return items;
}