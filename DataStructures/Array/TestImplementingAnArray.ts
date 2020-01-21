import MyArray from './ImplementingAnArray';

const array = new MyArray<number>();

// * Error
// array.pop()

array.push(1);
array.push(2);
array.push(3);
array.push(4);
array.push(5);

console.log(array.pop());
console.log(array.pop());
console.log(array.pop());
console.log(array.pop());
console.log(array.pop());

array.push(1);
array.push(2);
array.push(3);
array.push(4);
array.push(5);

// * Error
// array.delete(-1);
// array.delete(20);
// array.delete(5);

console.log(`Before deleting: ${array.toString()}`);
array.delete(2);
console.log(array.toString());
array.delete(3);
console.log(array.toString());
array.delete(0);
console.log(array.toString());

// * Error
// array.insert(-1, 2);
// array.insert(2, 4);
// array.insert(3, 5);

console.log(`Before inserting: ${array.toString()}`);
array.insert(1, 3);
console.log(array.toString());
array.insert(0, 1);
console.log(array.toString());