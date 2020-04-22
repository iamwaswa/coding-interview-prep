type Node<T> = {
  left: Node<T>,
  right: Node<T>,
  value: T,
};

// * We are assuming this is a balanced binary search tree
// * otherwise time complexities are O(n) instead of O(log(n))
export default class BinarySearchTree<T> {
  private root: Node<T>;

  constructor() {
    this.root = null;
  }

  // * Time Complexity: O(1)
  getRoot = (): Node<T> => { 
    return this.root;
  }
  
  // * Time Complexity: O(log(n))
  insert = (value: T): BinarySearchTree<T> => {
    if (!this.root) {
      this.root = { value, left: null, right: null };
    } else {
      let currentNode = this.root;
      let parentNode = this.root;
      do {
        parentNode = currentNode;

        if (value <= currentNode.value) {
          currentNode = currentNode.left;
        } else {
          currentNode = currentNode.right;
        }
      } while (currentNode !== null);

      if (value <= parentNode.value) {
        parentNode.left = { value, left: null, right: null };
      } else {
        parentNode.right = { value, left: null, right: null };
      }
    }

    return this;
  };
  
  // * Time Complexity: O(log(n))
  lookup = (value: T): Node<T> => {
    if (!this.root) {
      return null;
    }
    
    let currentNode = this.root;
    do {
      if (value === currentNode.value) {
        return currentNode;
      }

      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    } while (currentNode !== null);

    return currentNode;
  };
  
  // * Time Complexity: O(log(n))
  remove = (value: T): boolean => {
    if (!this.root) {
      return false;
    }

    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        // * We have a match, get to work!
        
        if (currentNode.right === null) {
          // * Option 1: No right child: 
          
          if (parentNode === null) {
            // * Current node is the root with no right child
            this.root = currentNode.left;
          } else {
            if (currentNode.value < parentNode.value) {
              // * current value < parent value, make current left child a child of parent
              parentNode.left = currentNode.left;
            
            } else if (currentNode.value > parentNode.value) {
              // * current value > parent value, make left child a right child of parent
              parentNode.right = currentNode.left;
            }
          }
        } else if (currentNode.right.left === null) {
          // * Option 2: Right child which doesn't have a left child
          currentNode.right.left = currentNode.left;
          
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {
            if (currentNode.value < parentNode.value) {
              // * current value < parent value, make right child of the left the parent
              parentNode.left = currentNode.right;
            } else if (currentNode.value > parentNode.value) {
              // * current value > parent value, make right child a right child of the parent
              parentNode.right = currentNode.right;
            }
          }
        } else {
          // * Option 3: Right child that has a left child
          // * Find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }
          
          // * Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        
        return true;
      }
    }
  }
};