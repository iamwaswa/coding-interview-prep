import SinglyLinkedList from './ImplementingASinglyLinkedList';

const linkedList = new SinglyLinkedList(5);

linkedList.remove(0, 4);
linkedList.insert(0, 3);
linkedList.insert(0, 2);
linkedList.insert(0, 1);
linkedList.insert(0, 0);
console.log(linkedList.reverse());