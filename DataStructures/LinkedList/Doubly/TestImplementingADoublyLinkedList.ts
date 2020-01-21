import DoublyLinkedList from './ImplementingADoublyLinkedList';

const linkedList = new DoublyLinkedList(0);

linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
console.log(linkedList.remove(3));