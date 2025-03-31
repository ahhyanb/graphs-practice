function hasCycle(head) {

    if (head === null || head.next === null) return false; // if the head is null or the head pointed to next is null return false right away

    // both pointers start at head
    let slow = head; 
    let fast = head;

    while (fast !== null && slow !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) return true; // both nodes are pointed to the same node ! theres a cycle!!
    }

    return false; // if it goes through all of the nodes there is no cycle;
}