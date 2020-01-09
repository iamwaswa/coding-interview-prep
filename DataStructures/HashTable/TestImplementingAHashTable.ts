import HashTable from './ImplementingAHashTable';

const hashTable = new HashTable<number>(50);

// * Error
// hashTable.get(`grapes`);

hashTable.set(`grapes`, 10000);

console.log(hashTable.get(`grapes`));
