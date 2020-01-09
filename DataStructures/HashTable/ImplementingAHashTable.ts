export default class HashTable<T> {
  private data: Array<[string, T]>;
  private indicesWithValues: Set<number>;

  constructor(size: number) {
    this.data = new Array(size);
    this.indicesWithValues = new Set<number>();
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

    // * Avoid collisions
    if (!this.data[index]) {
      this.data[index] = [key, value];
    }
    
    this.indicesWithValues.add(index);
  }

  // * Time Complexity: O(n)
  public get = (key: string): T => {
    const index = this.hashFunction(key);
    if (this.indicesWithValues.has(index)) {
      const [, value] = this.data[index];
      return value;
    }

    throw new Error(`The given key: ${key}, does not correspond to any entry!`);
  }
}