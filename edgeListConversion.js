
// function with known numbers of vertices

function buildAdjacencyList(n, edges) {
    const graph = Array.from({ length: n + 1 }, () => []); // +1 for 1-based indexing
  
    edges.forEach(([u, v]) => {
      graph[u].push(v);
      graph[v].push(u); // For undirected graph, add both connections
    });
  
    return graph;
  }


  const edgeList = [
    [1, 2],
    [1, 3],
    [2, 3],
    [3, 4]
  ];

const convertedEdgeList = buildAdjacencyList(5, edgeList);

console.log(convertedEdgeList);

// function with unknown numbers of vertiices

function buildAdjacencyList2(edges) {
    const graph = {}; // Use an object to store adjacency list dynamically
  
    edges.forEach(([u, v]) => {
      if (!graph[u]) graph[u] = []; // Create key if it doesn't exist
      if (!graph[v]) graph[v] = []; // Create key if it doesn't exist
  
      graph[u].push(v); // Add v as a neighbor of u
      graph[v].push(u); // Add u as a neighbor of v (undirected graph)
    });
  
    return graph;
  }
  
  // Example Usage:
  const edges = [
    [1, 2],
    [1, 3],
    [2, 4],
    [5, 6]
  ];
  
  console.log(buildAdjacencyList2(edges));