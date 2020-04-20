import Queue from "./ImplementingAQueue";

const queue = new Queue();
console.log(queue);
console.log(queue.enqueue(0));
console.log(queue);
console.log(queue.enqueue(1));
console.log(queue);
console.log(queue.enqueue(2));
console.log(queue);
console.log(queue.dequeue());
console.log(queue);
console.log(queue.dequeue());
console.log(queue);
console.log(queue.dequeue());
console.log(queue);
console.log(queue.dequeue());
console.log(queue);
console.log(queue.isEmpty());
