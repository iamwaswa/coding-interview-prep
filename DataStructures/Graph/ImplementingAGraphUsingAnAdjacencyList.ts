export default class Graph<T> {
  private adjacencyList: Map<T, Set<T>>;

  constructor() {
    this.adjacencyList = new Map();
  }

  // * Time Complexity: O(1)
  addVertex = (node: T): Graph<T> => {
    if (!this.adjacencyList.has(node)) {
      this.adjacencyList.set(node, new Set<T>());
    }
    
    return this;
  }
  
  // * Time Complexity: O(1)
  addEdge = (node: T, otherNode: T): Graph<T> => {
    this.addVertex(node);
    this.addVertex(otherNode);

    this.adjacencyList.set(node, this.adjacencyList.get(node).add(otherNode));
    this.adjacencyList.set(otherNode, this.adjacencyList.get(otherNode).add(node));
    
    return this;
  }

  // * Time Complexity: O(n)
  showConnections = (): void => {
    this.adjacencyList.forEach((nodeConnections: Set<T>, node: T): void => {
      let connections = ``;
      
      nodeConnections.forEach((value: T): void => {
        connections += `${value} `;
      });
      
      console.log(node + "-->" + connections);
    });
  }
}