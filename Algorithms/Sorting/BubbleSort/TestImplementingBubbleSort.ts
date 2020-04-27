import { bubbleSort } from './ImplementBubbleSort';

let numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
console.log(bubbleSort(numbers));
numbers = [];
console.log(bubbleSort(numbers));
numbers = [1];
console.log(bubbleSort(numbers));