import Graph from './ImplementingAGraphUsingAnAdjacencyList';

const graph = new Graph<string>();

console.log(graph.addVertex(`0`));
console.log(graph.addVertex(`1`));
console.log(graph.addVertex(`2`));
console.log(graph.addVertex(`3`));
console.log(graph.addVertex(`4`));
console.log(graph.addVertex(`5`));
console.log(graph.addVertex(`6`));
console.log(graph.addEdge(`3`, `1`));
console.log(graph.addEdge(`3`, `4`));
console.log(graph.addEdge(`4`, `2`));
console.log(graph.addEdge(`4`, `5`));
console.log(graph.addEdge(`1`, `2`));
console.log(graph.addEdge(`1`, `0`));
console.log(graph.addEdge(`0`, `2`));
console.log(graph.addEdge(`6`, `5`));
console.log(graph.showConnections());