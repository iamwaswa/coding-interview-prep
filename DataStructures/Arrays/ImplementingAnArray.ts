type ArrayData<T> = {
  [index: number]: T
};

class MyArray<T> {
  private length: number;
  private data: ArrayData<T>;

  constructor() {
    this.length = 0;
    this.data = {};
  }

  // * Time Complexity: O(1)
  public push(item: T): void {
    this.data[this.length] = item;
    this.length++;
  }

  // * Time Complexity: O(1)
  public pop(): T {
    if (this.length > 0) {
      const lastItem = this.data[this.length - 1];
      delete this.data[this.length - 1];
      this.length--;
      return lastItem;
    }

    throw Error(`Cannot pop from an empty array`);
  }

  // * Time Complexity: O(n)
  public delete(index: number): void {
    if (index < 0) {
      throw Error(`Index must be greater than or equal to 0. Given: ${index}`);
    } else if (index < this.length) {
      this.shiftItemsLeftFromIndex(index);
      delete this.data[this.length - 1];
      this.length--;
    } else {
      throw Error(`Cannot delete from an index greater than or equal to the length of the array. Given: ${index}, Length: ${this.length}`);
    }
  }

  private shiftItemsLeftFromIndex(index: number): void {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
  }

  // * Time Complexity: O(n)
  public insert(index: number, item: T) {
    if (index < 0) {
      throw Error(`Index must be greater than or equal to 0. Given: ${index}`);
    } else if (index < this.length) {
      this.shiftItemsRightFromIndex(index);
      this.data[index] = item;
    } else {
      throw Error(`Cannot insert into array from index greater than or equal to the length of the array. Given: ${index}, Length: ${this.length}`);
    }
  }

  private shiftItemsRightFromIndex (index: number): void {
    this.length++;

    for (let i = this.length - 1; i > index; i--) {
      this.data[i] = this.data[i - 1];
    }
  }

  // * Time Complexity: O(n)
  public toString(): string {
    let output = `[`;

    for (let index = 0; index < this.length; index++) {
      if (index === this.length - 1) {
        output += `${this.data[index]}`;
      } else {
        output += `${this.data[index]}, `;
      }
    }

    output += `]`;

    return output;
  }
}

export default MyArray;