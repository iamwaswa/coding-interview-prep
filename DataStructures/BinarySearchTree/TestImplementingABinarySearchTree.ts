import BinarySearchTree from './ImplementingABinarySearchTree';

const tree = new BinarySearchTree();

const traverse = ({ value, left, right }) => {
  const tree = { value, left: null, right: null };
  tree.left = left ? traverse(left) : null;
  tree.right = right ? traverse(right) : null;
  return tree;
};

console.log(tree.lookup(9));
tree.insert(9);
console.log(tree.lookup(9));
console.log(JSON.stringify(traverse(tree.getRoot()), null, 2));
console.log(tree.lookup(4));
tree.insert(4);
console.log(tree.lookup(4));
console.log(JSON.stringify(traverse(tree.getRoot()), null, 2));
console.log(tree.lookup(6));
tree.insert(6);
console.log(tree.lookup(6));
console.log(JSON.stringify(traverse(tree.getRoot()), null, 2));
console.log(tree.lookup(20));
tree.insert(20);
console.log(tree.lookup(20));
console.log(JSON.stringify(traverse(tree.getRoot()), null, 2));
console.log(tree.lookup(170));
tree.insert(170);
console.log(tree.lookup(170));
console.log(JSON.stringify(traverse(tree.getRoot()), null, 2));
console.log(tree.lookup(15));
tree.insert(15);
console.log(tree.lookup(15));
console.log(JSON.stringify(traverse(tree.getRoot()), null, 2));
console.log(tree.lookup(1));
tree.insert(1);
console.log(tree.lookup(1));
console.log(JSON.stringify(traverse(tree.getRoot()), null, 2));
console.log(tree.lookup(9));
console.log(tree.lookup(99));