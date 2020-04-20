import Stack from "../../Stack/Array/ImplementingAStackUsingAnArray";

export default class Queue<T> {
  private enqueueStack: Stack<T>;
  private dequeueStack: Stack<T>;

  constructor() {
    this.enqueueStack = new Stack<T>();
    this.dequeueStack = new Stack<T>();
  }

  // * Time Complexity: O(n)
  private fillDequeueStack = (): void => {
    while (!this.enqueueStack.isEmpty()) {
      this.dequeueStack.push(this.enqueueStack.pop());
    }
  };
  
  // * Time Complexity: O(n)
  private fillEnqueueStack = (): void => {
    while (!this.dequeueStack.isEmpty()) {
      this.enqueueStack.push(this.dequeueStack.pop());
    }
  };

  // * Time Complexity: O(n)
  public peek = (): T => {
    if (this.enqueueStack.isEmpty()) {
      return null;
    }

    this.fillDequeueStack();

    const first = this.dequeueStack.peek();

    this.fillEnqueueStack();

    return first;
  };

  // * Time Complexity: O(1)
  public enqueue = (value: T): T => {
    return this.enqueueStack.push(value);
  };

  // * Time Complexity: O(n)
  public dequeue = (): T => {
    if (this.enqueueStack.isEmpty()) {
      return null;
    }

    this.fillDequeueStack();

    const first = this.dequeueStack.pop();

    this.fillEnqueueStack();

    return first;
  };

  // * Time Complexity: O(1)
  public isEmpty = (): boolean => {
    return this.enqueueStack.isEmpty();
  };
}
