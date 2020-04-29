import { linearSearch } from './ImplementLinearSearch';

const items = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

console.log(linearSearch(items, 1));
console.log(linearSearch(items, 8));
console.log(linearSearch(items, 5));
console.log(linearSearch(items, -1));