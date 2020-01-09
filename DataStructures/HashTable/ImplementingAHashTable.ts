export default class HashTable<T> {
  private data: Array<Array<[string, T]>>;

  constructor(size: number) {
    this.data = new Array(size);
  }

  // * Time Complexity: O(n)
  private hashFunction = (key: string): number => {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }

    return hash;
  }

  // * Time Complexity: O(n)
  public set = (key: string, value: T): void => {
    const index = this.hashFunction(key);

    if (!this.data[index]) {
      this.data[index] = [];
    } 

    const foundIndex = this.data[index].findIndex(
      ([foundKey,]: [string, T]): boolean => foundKey === key
    );

    if (foundIndex === -1) {
      this.data[index].push([key, value]);
    } else {
      this.data[index][foundIndex] = [key, value];
    }
  }

  // * Time Complexity: O(n)
  public get = (key: string): T => {
    const index = this.hashFunction(key);

    let result: undefined | [string, T];
    if (this.data[index]) {
      result = this.data[index].find(
        ([foundKey,]: [string, T]): boolean => foundKey === key
      );
    }

    if (result) {
      const [, value] = result;
      return value;
    }

    throw new Error(`The given key: ${key}, does not correspond to any entry!`);
  }
}