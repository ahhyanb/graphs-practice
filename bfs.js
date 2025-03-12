const graph = {
    A: ["B", "C"],
    B: ["A", "D", "E"],
    C: ["A", "F"],
    D: ["B"],
    E: ["B", "G"],
    F: ["C", "H", "I"],
    G: ["E"],
    H: ["F"],
    I: ["F"]
  };

  
function bfs(start) {
    let visited = new Set();
    let queue = [start];

    while (queue.length > 0) {
        let node = queue.shift(); // access the top of the queue
        console.log(node);
        visited.add(node);

        for (let neighbor of graph[node]) {
            if(!visited.has(neighbor)) {
                queue.push(neighbor); // add it to the end of the queue
                visited.add(neighbor); // add neighbor to the visited set.
            }
        }
    }
}


bfs("A");