type Node<T> = {
  value: T;
  next: Node<T>;
};

export default class Queue<T> {
  private first: Node<T>;
  private last: Node<T>;
  private length: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  // * Time Complexity: O(1)
  public peek = (): T => {
    return this.first ? this.first.value : null;
  };

  // * Time Complexity: O(1)
  public enqueue = (value: T): T => {
    if (this.length === 0) {
      this.last = { value, next: null };
      this.first = this.last;
    } else {
      this.last.next = { value, next: null };
      this.last = this.last.next;
    }

    this.length++;

    return this.last.value;
  };

  // * Time Complexity: O(1)
  public dequeue = (): T => {
    if (this.length === 0) {
      return null;
    }
    
    const previousFirst = this.first;
    this.first = this.first.next;

    if (this.length === 1) {
      this.last = this.first;
    }
    
    this.length--;
    return previousFirst.value;
  };

  // * Time Complexity: O(1)
  public isEmpty = (): boolean => {
    return this.length === 0;
  };
}
