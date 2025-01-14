let graph = {};
graph["you"] = ["yossab", "samuel", "gohar"];
graph["samuel"] = ["yossab", "ahmed", "zozm"];
graph["yossab"] = ["youssef", "ahmed", "jo"];
graph["ahmed"] = [];
graph["jo"] = [];
graph["zozm"] = ["mangom"];
let queue = graph["you"];
let searchedBefore = new Set();
function breathSearch(queue, searchedBefore, graph) {
  while (queue.length !== 0) {
    let man = queue.shift();
    if (!searchedBefore.has(man)) {
      searchedBefore.add(man);
      if (isMangoSeller(man)) return `${man} is a mango seller`;
      else {
        if(graph[man])
          queue.push(...graph[man]);
      }
    }
  }
  return false;
}
function isMangoSeller(name) {
  if (name[name.length - 1] === "m") return true;
  return false;
}
console.log(breathSearch(queue, searchedBefore, graph));
