type Node<T> = {
  value: T;
  next: Node<T>;
};

export default class Stack<T> {
  private top: Node<T>;
  private bottom: Node<T>;
  private length: number;

  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  // * Time Complexity: O(1)
  public peek = (): T => {
    return this.top ? this.top.value : null;
  };

  // * Time Complexity: O(1)
  public push = (value: T): Node<T> => {
    if (this.length === 0) {
      this.top = { value, next: null };
      this.bottom = { value, next: null };
    } else {
      const previousTop = this.top;
      this.top = { value, next: this.top };
      this.top.next = previousTop;
    }

    this.length++;

    return this.top;
  };

  // * Time Complexity: O(1)
  public pop = (): Node<T> => {
    if (this.length === 0) {
      return null;
    } else if (this.length === 1) {
      const previousTop = this.top;
      this.top = null;
      this.bottom = null;
      this.length--;
      return previousTop;
    } else {
      const previousTop = this.top;
      this.top = this.top.next;
      this.length--;
      return previousTop;
    }
  };

  // * Time Complexity: O(1)
  public isEmpty = (): boolean => {
    return this.length === 0;
  };
}
