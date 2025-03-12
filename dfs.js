// Helper function: DFS traversal
function dfs(graph, current, destination, visited) {
    if (current === destination) return true; // Base case: Found the destination
  
    visited.add(current); // Mark node as visited
  
    for (let neighbor of graph[current]) {
      if (!visited.has(neighbor)) {
        if (dfs(graph, neighbor, destination, visited)) {
          return true; // If path found, return true
        }
      }
    }
  
    return false; // No path found
  }
  
  // Main function: Check if a valid path exists
  function hasValidPath(n, edges, source, destination) {
    const graph = buildAdjacencyList(edges); // Build adjacency list
    const visited = new Set(); // Track visited nodes
    return dfs(graph, source, destination, visited); // Start DFS
  }
  


  
//   // Helper function: Convert edge list to adjacency list
//   function buildAdjacencyList(edges) {
//     const graph = {}; // Use an object for better readability
  
//     for (let [a, b] of edges) {
//       if (!graph[a]) graph[a] = [];
//       if (!graph[b]) graph[b] = [];
//       graph[a].push(b);
//       graph[b].push(a); // Undirected graph
//     }
  
//     return graph;
//   }
  
  // 🔥 Example Usage:
  const edgeList = [
    [1, 2],
    [1, 3],
    [2, 3],
    [3, 4]
  ];
  
  console.log(hasValidPath(4, edgeList, 1, 4)); // true
  console.log(hasValidPath(4, edgeList, 1, 5)); // false
  

// my implementation


  function convertToAdjacency(n, list) {
    const graph = Array.from({ length: n }, () => []);
    for (let [a, b] of list) {
        graph[a].push(b);
        graph[b].push(a);
    }
    return graph;
}

function hasValidPath(n, edges, source, destination) {
    const graph = convertToAdjacency(n, edges);
    const visited = new Set();
    return dfs(graph, source, destination, visited); // Use the adjacency list, not edges
}

function dfs(graph, source, destination, visited) {
    if (source === destination) return true; // Base case: found the destination

    visited.add(source); // Mark node as visited

    for (let neighbor of graph[source]) { // Use graph, not edges
        if (!visited.has(neighbor)) {  
            if (dfs(graph, neighbor, destination, visited)) {
                return true; // If path found, return true
            }
        }
    }

    return false; // If no path found, return false
}