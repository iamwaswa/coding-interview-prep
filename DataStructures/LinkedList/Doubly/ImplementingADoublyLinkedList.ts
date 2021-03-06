type Node<T> = {
  value: T,
  previous?: Node<T>,
  next: Node<T>,
};

export default class DoublyLinkedList<T> {
  private head: Node<T>;
  private tail: Node<T>;
  private length: number;

  constructor (value: T) {
    this.head = {
      value,
      next: null,
    };

    this.tail = this.head;

    this.length = 1;
  }

  // * Time Complexity: O(1)
  private sanityCheckIndex = (index: number, remove: boolean = false): void => {
    if (index >= this.length) {
      throw new Error(
        `Index is greater than length! Index: ${index}, Length: ${this.length}`
      );
    }

    if (index < 0) {
      throw new Error(
        `Index is negative! Index: ${index}`
      );
    }

    if (remove && index === 0 && this.length === 1) {
      throw new Error(
        `Cannot delete node from linked list with one item`
      );
    }
  }

  // * Time Complexity: O(n)
  private findNodeBeforeIndex = (index: number): Node<T> => {
    let nodeIndex;
    let node: Node<T>;
    for (nodeIndex = 0; nodeIndex !== index; nodeIndex++) {
      node = nodeIndex === 0 ? this.head : node.next;
    }

    return node;
  }

  // * Time Complexity: O(1)
  public append = (value: T): void => {
    this.tail.next = {
      value,
      previous: this.tail,
      next: null,
    };

    this.tail = this.tail.next;

    this.length++;
  }

  // * Time Complexity: O(1)
  public prepend = (value: T): void => {
    this.head = {
      value,
      next: this.head,
    };

    this.head.next.previous = this.head;

    this.length++;
  }

  // * Time Complexity: O(n)
  public insert = (index: number, value: T): void => {
    this.sanityCheckIndex(index);

    if (index === 0) {
      this.prepend(value);
      return;
    }

    const node = this.findNodeBeforeIndex(index);

    node.next = {
      value,
      next: node.next,
    };

    node.next.previous = node;

    node.next.next.previous = node.next;

    this.length++;
  }

  // * Time Complexity: O(n)
  public remove = (index: number): void => {
    this.sanityCheckIndex(index, true);

    if (index === 0) {
      this.head = this.head.next;
      this.head.previous = undefined;
      this.length--;
      return;
    }

    const node = this.findNodeBeforeIndex(index);

    if (node.next.next === null) {
      this.tail = node;
      node.next = null;
      this.length--;
      return;
    }

    node.next = node.next.next;

    node.next.previous = node;

    this.length--;
  }
}