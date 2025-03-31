function hasCycle(head) {

    let slow = head;
    let fast = head;

    while(fast !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) return true;
    }

    return false;
}

// use two pointers to traverse down the list
// set the pointers inthe beggining of the head 
// traverse slow one node at a stime 
// traverse fast two times ahead
// if the pointerrs points to the same node there is a cycle...
