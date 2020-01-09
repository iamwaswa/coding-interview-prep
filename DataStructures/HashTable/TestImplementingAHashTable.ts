import HashTable from './ImplementingAHashTable';

const hashTable = new HashTable<number>(50);

// * Error
// hashTable.get(`grapes`);

hashTable.set(`grapes`, 10000);
console.log(hashTable.get(`grapes`));

// * Same key different value should overwrite
hashTable.set(`grapes`, 200);
console.log(hashTable.get(`grapes`));

// * Addition results in collision
hashTable.set(`grapesd`, 350);
console.log(hashTable.get(`grapesd`));