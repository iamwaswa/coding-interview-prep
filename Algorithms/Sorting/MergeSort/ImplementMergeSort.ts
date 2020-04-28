
// * Time Complexity: O(left.length + right.length)
// * Space Complexity: O(left.length + right.length)
const merge = <T>(left: Array<T>, right: Array<T>): Array<T> => {
  const merged = [];
  
  let leftIndex = 0;
  let rightIndex = 0;
  while (merged.length !== left.length + right.length) {
    if (leftIndex === left.length) {
      return [...merged, ...right.slice(rightIndex)];
    }

    if (rightIndex === right.length) {
      return [...merged, ...left.slice(leftIndex)];
    }

    if (left[leftIndex] <= right[rightIndex]) {
      merged.push(left[leftIndex]);
      leftIndex++;
    } else {
      merged.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return merged;
}

// * Time Complexity: O(nlog(n))
// * Space Complexity: O(n)
export const mergeSort = <T>(items: Array<T>): Array<T> => {
  if (items.length <= 1) {
    return items;
  }

  const middle = Math.floor(items.length / 2);
  const left = items.slice(0, middle);
  const right = items.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}