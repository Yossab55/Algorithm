let graph = {}
graph['start'] = {}
graph['start']['a'] = 6;
graph['start']['b'] = 2;
graph['a'] = {}
graph['a']['finish'] = 1;
graph['b'] = {}
graph['b']['a'] = 3;
graph['b']['finish'] = 5;
graph['finish'] = null;

let cost = {};
cost['a'] = 6;
cost['b'] = 2;
cost['finish'] = Infinity;

let parent = {};
parent['a'] = "start"
parent['b'] = "start"
parent['finish'] = null;

let processed = new Set();

function dijkstra() {
  let node = findLowestCostNode();
  while (node != null) {
    let costToCurrentNode = cost[node];
    let neighbors = graph[node];
    let neighborsKeys = Object.keys(neighbors);
    for(let i = 0; i < neighborsKeys.length; i++) {
      let oldCost = cost[neighborsKeys[i]];
      let newCost = neighbors[neighborsKeys[i]] 
      + costToCurrentNode;
      if(oldCost > newCost) {
        cost[neighborsKeys[i]] = newCost;
        parent[neighborsKeys[i]] = node.toString();
      } 
    }

    node = findLowestCostNode();
    // break;
  }
  console.log(parent)
  console.log(cost)
}
function findLowestCostNode() {
  let costs = Object.keys(cost);
  let min = Infinity;
  let node = null;
  for(let i = 0; i < costs.length; i++) {
    let chick = cost[costs[i]];
    if(min > chick && ! processed.has(costs[i]) && graph[costs[i]] !== null) {
      min = chick;
      node = costs[i]
    }
  }
  processed.add(node);
  return node;
}
console.log(dijkstra());