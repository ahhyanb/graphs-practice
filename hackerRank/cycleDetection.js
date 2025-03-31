function hasCycle(head) {

    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {

        slow = slow.next;
        fast = fast.next.next;

        if(slow === fast) {
            return true;
        }

    }
    return false

}

// we need a way to traverse the the list
// using two pointers 
// slow and fast
// slow will move one node at a time fast will move two steps at a time.
// every time it moves we check to see if slow and fast points to the same node
// if tthey go through the nodes without problems theres no cycle
// if they match theres a cycle