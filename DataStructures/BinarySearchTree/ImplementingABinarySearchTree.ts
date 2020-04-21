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

  // * Time Complexity: O(log(n))
  private findParent = (node: Node<T>): Node<T> => {
    let currentNode = this.root;
    let parentNode = null;

    while (currentNode !== null) {
      if (node.value === currentNode.value) {
        return parentNode;
      } else if (node.value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (node.value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      }
    }
    
    return parentNode;
  };

  // * Time Complexity: O(log(n))
  private findLeftMostChild = (node: Node<T>): Node<T> => {
    if (node.left) {
      return this.findLeftMostChild(node.left);
    } else {
      return node;
    }
  };

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
  remove = (value: T): void => {
    const node = this.lookup(value);

    if (!node) {
      return;
    }

    if (!node.right && !node.left) {
      const parentNode = this.findParent(node);

      if (!parentNode) {
        this.root = null;
        return;
      }

      if (parentNode.left.value === node.value) {
        parentNode.left = null;
      }

      if (parentNode.right.value === node.value) {
        parentNode.right = null;
      }
    }

    if (!node.right) {
      const parentNode = this.findParent(node);

      if (!parentNode) {
        this.root = node.left;
        return;
      }

      if (parentNode.left.value === node.value) {
        parentNode.left = node.left;
      }

      if (parentNode.right.value === node.value) {
        parentNode.right = node.left;
      }
    }

    const leftMostChildOfRight = this.findLeftMostChild(node.right);
    
    const parentOfLeftMostChildOfRight = this.findParent(leftMostChildOfRight);

    if (leftMostChildOfRight.right) {
      parentOfLeftMostChildOfRight.left = leftMostChildOfRight.right;
      leftMostChildOfRight.right = null;
    }

    node.value = leftMostChildOfRight.value;
    parentOfLeftMostChildOfRight.right = null;
  };
};