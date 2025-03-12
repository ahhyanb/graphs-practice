const graph = {
    1: [2, 4],
    2: [1, 3],
    3: [2, 4],
    4: [1, 3]
  };
  


function dfs(graph, node, parent, visited) {
    console.log(`Visiting ${node}, came from ${parent}`);
    visited.add(node);
  
    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        console.log(`Moving to ${neighbor} from ${node}`);
        if (dfs(graph, neighbor, node, visited)) {
          return true;
        }
      } else if (neighbor !== parent) {
        console.log(`Cycle found at ${node} through ${neighbor}!`);
        return true;
      }
    }
    return false;
  }
  
  function hasCycle(graph, startNode) {
    const visited = new Set();
    return dfs(graph, startNode, null, visited);
  }
  
  console.log("Cycle exists:", hasCycle(graph, 1));
  