// * Time Complexity: O(n^2)
// * Space Complexity: O(1)
export const selectionSort = <T>(items: Array<T>): Array<T> => {
  for (let i = 0; i < items.length - 1; i++) {
    let smallestIndex = i;
    for (let j = i + 1; j < items.length; j++) {
      if (items[j] < items[smallestIndex]) {
        smallestIndex = j;
      }
    }
    
    if (i !== smallestIndex) {
      [items[i], items[smallestIndex]] = [items[smallestIndex], items[i]];
    }
  }
  
  return items;
};