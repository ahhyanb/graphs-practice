// Given the head of a singly linked list, find the middle node of the linked list.
// If there are two middle nodes, return the second middle node.

function findMiddle(head) {
    let slow = head; // this will move one step
    let fast = head; // this will move two steps ahead;

    while(fast !== null && fast.next !== null) {
        slow = slow.next; // move to the next node
        fast = fast.next.next; // move two steps ahead at every iteration
    }

    return slow; // return slow
}