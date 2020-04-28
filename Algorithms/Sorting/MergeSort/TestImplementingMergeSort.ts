import { mergeSort } from './ImplementMergeSort';

let numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
console.log(mergeSort(numbers));
numbers = [];
console.log(mergeSort(numbers));
numbers = [1];
console.log(mergeSort(numbers));