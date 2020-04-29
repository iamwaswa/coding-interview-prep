import { binarySearch } from './ImplementBinarySearch';

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(binarySearch(items, 1));
console.log(binarySearch(items, 5));
console.log(binarySearch(items, 8));
console.log(binarySearch(items, 9));
console.log(binarySearch(items, 10));
console.log(binarySearch(items, -1));