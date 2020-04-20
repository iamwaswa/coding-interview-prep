export default class Stack<T> {
  private values: Array<T>;

  constructor() {
    this.values = [];
  }

  // * Time Complexity: O(1)
  public peek = (): T => {
    return this.values.length > 0 ? this.values[this.values.length - 1] : null;
  };

  // * Time Complexity: O(1)
  public push = (value: T): T => {
    this.values.push(value);
    return this.values[this.values.length - 1];
  };

  // * Time Complexity: O(1)
  public pop = (): T => {
    return this.values.pop();
  };

  // * Time Complexity: O(1)
  public isEmpty = (): boolean => {
    return this.values.length === 0;
  };
}
