interface IItem<T> {
  found: boolean;
  index?: number;
  item?: T;
}

// * Time Complexity: O(log(n))
// * Space Complexity: O(1)
export const binarySearch = <T> (
  items: Array<T>, 
  item: T, 
  start: number = 0, 
  end: number = items.length - 1
): IItem<T> => {
  if (end === start) {
    if (item === items[end]) {
      return { found: true, item, index: start };
    }
    return { found: false };
  }
  
  if (end < start) {
    return { found: false };
  }
  
  const middle = Math.floor((end + start)/ 2);
  if (items[middle] === item) {
    return { found: true, item, index: middle };
  }

  if (item < items[middle]) {
    return binarySearch(items, item, start, middle - 1);
  } else {
    return binarySearch(items, item, middle + 1, end);
  }
};