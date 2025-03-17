function findShortestPath(graph, source, target) {
    let queue = [[source]]; // Queue starts with the path [source]
    let visited = new Set([source]); // Mark the source as visited

    while (queue.length > 0) {
        let path = queue.shift(); // Take the first path from the queue
        let node = path[path.length - 1]; // Last node in the current path

        console.log(`Dequeued path: ${path}`);
        
        if (node === target) {
            console.log(`Found target! Returning path: ${path}`);
            return path; // Return the path when we find the target
        }

        for (let neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor); // Mark as visited
                let newPath = [...path, neighbor]; // Create a new path by adding this neighbor
                queue.push(newPath); // Enqueue the new path
                console.log(`Enqueued new path: ${newPath}`);
            }
        }
    }

    return null; // If no path is found
}



const graph = [
    [],      // Index 0 is unused
    [2, 3],  // Node 1 is connected to 2 and 3
    [1, 4, 5],  // Node 2 is connected to 1, 4, 5
    [1, 5, 6],  // Node 3 is connected to 1, 5, 6
    [2],    // Node 4 is connected to 2
    [2, 3, 7],  // Node 5 is connected to 2, 3, 7
    [3],    // Node 6 is connected to 3
    [5]     // Node 7 is connected to 5
  ];
  
  // Find shortest path from Node 4 to Node 7
findShortestPath(graph, 1, 2);