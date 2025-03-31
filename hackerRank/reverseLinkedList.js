function reverseList(head) {
    let current = head;
    let prev = null;
    
    while (current !== null) { // stop iterating when the current is null 
        let next = current.next; // keep track of the next node
        current.next = prev; // change the current node's next pointer to point to the previous node
        prev = current; // update the previous to be the current node
        current = next; // move to the next node in the list
    }

    return prev; // prev becomes the new head
}

function reverseListRecursive(head) {
    if (head === null || head.next === null) return head;

    let current = head;
    let prev = null;




}