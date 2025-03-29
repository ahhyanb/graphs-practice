// Given the head of a singly linked list, reverse the list and return the reversed list.
function reverseLinkedList(head) {

    let prev = null;        // Keeps track of the reversed part of the list
    let current = head;      // The current node we are processing
    
    while (current !== null) {
        let next = current.next; // Save the next node before breaking the link
        current.next = prev;     // Reverse the link
        prev = current;          // Move `prev` to the current node
        current = next;          // Move to the next node in the original list
    }

    return prev;  // `prev` is now the new head of the reversed list
}