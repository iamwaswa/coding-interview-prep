interface IItem<T> {
  found: boolean;
  index?: number;
  item?: T;
}

// * Time Complexity: O(n)
// * Space Complexity: O(1)
export const linearSearch = <T>(items: Array<T>, item: T): IItem<T> => {
  for (let index = 0; index < items.length; index++) {
    if (items[index] === item) {
      return { found: true, item, index };
    }
  }

  return { found: false };
};