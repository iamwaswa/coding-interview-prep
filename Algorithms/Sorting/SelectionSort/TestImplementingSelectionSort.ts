import { selectionSort } from './ImplementSelectionSort';

let numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
console.log(selectionSort(numbers));
numbers = [];
console.log(selectionSort(numbers));
numbers = [1];
console.log(selectionSort(numbers));