function levelOrderTraversel(root) {

    if (!root) return [];

    let result = [];
    let queue = [root]; // start with the root

    while(queue.length > 0) { // keep looping until theres none left in the queue
        const level = [];
        const levelSize = queue.length;
    

        for (let i = 0; i < levelSize; i++) { // loop the whole queue
            const current = queue.shift(); // take the first node in the queue
            level.push(current.val); // push the value to the level

            if (current.left) queue.push(current.left); // if the current node has a left push it to the queue
    
            if (current.right) queue.push(current.right); // if the current node has a right push it to the queue
        }

        result.push(level); // push the level into to the result;
    }
    return result; // return the whole result
}