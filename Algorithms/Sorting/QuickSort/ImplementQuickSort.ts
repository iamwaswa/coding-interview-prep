// * Time Complexity: O(n^2)
// * Space Complexity: O(log(n))
export const quickSort = <T>(
  items: Array<T>, 
  left: number = 0, 
  right: number = items.length - 1
): Array<T> => {
  if (right <= left) {
    return items;
  }

  let pivotIndex = right;
  for (let i = left; i < pivotIndex; i++) {
    if (items[i] > items[pivotIndex]) {
      // * Swap items[i] with items[pivotIndex - 1]
      [items[i], items[pivotIndex - 1]] = [items[pivotIndex - 1], items[i]];
      // * Swap items[pivotIndex] with items[pivotIndex - 1]
      [items[pivotIndex - 1], items[pivotIndex]] = [items[pivotIndex], items[pivotIndex - 1]];
      pivotIndex--;
      i--;
    }
  }

  quickSort(items, left, pivotIndex - 1);
  quickSort(items, pivotIndex + 1, right);
  
  return items;
};