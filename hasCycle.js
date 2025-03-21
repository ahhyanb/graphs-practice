function hasCycle(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;             // Move slow by 1
        fast = fast.next.next;        // Move fast by 2

        if (slow === fast) {
            return true;              // They met = cycle detected!
        }
    }

    return false;                     // If we exit the loop, no cycle
}
