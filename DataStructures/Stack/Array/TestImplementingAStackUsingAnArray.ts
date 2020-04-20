import Stack from "./ImplementingAStackUsingAnArray";

const stack = new Stack();

stack.push(0);
stack.push(1);
stack.push(2);
stack.pop();
stack.pop();
stack.pop();
console.log(stack.isEmpty());
