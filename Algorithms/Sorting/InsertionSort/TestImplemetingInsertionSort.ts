import { insertionSort } from './ImplementInsertionSort';

let numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
console.log(insertionSort(numbers));
numbers = [];
console.log(insertionSort(numbers));
numbers = [1];
console.log(insertionSort(numbers));