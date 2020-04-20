import Stack from "./ImplementingAStackUsingAnArray";

const stack = new Stack();

stack.push(`hi`);
stack.push(`hello`);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.isEmpty());
