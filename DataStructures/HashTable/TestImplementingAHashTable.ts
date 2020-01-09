import HashTable from './ImplementingAHashTable';

const hashTable = new HashTable<number>(50);

// * Error
// hashTable.get(`grapes`);

hashTable.set(`apples`, 10000);
console.log(hashTable.get(`apples`));

hashTable.set(`oranges`, 234);
console.log(hashTable.get(`oranges`));

hashTable.set(`plums`, 456);
console.log(hashTable.get(`plums`));

hashTable.set(`bananas`, 3445);
console.log(hashTable.get(`bananas`));

hashTable.set(`kiwis`, 1231);
console.log(hashTable.get(`kiwis`));

// * Same key different value should overwrite
hashTable.set(`grapes`, 200);
console.log(hashTable.get(`grapes`));

// * Addition results in collision
hashTable.set(`grapesd`, 350);
console.log(hashTable.get(`grapesd`));

// * Get all keys
console.log(hashTable.keys());