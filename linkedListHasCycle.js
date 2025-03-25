function hasCycle(head) {
   
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) { // fast is not null and fast.next is not null
            slow = slow.next;
            fast = fast.next.next;
        
            if (slow === fast) return true;
    }
    return false;
}

function hasCycleSet(head) {
    const set = new Set();

    let current = head;

    while (current !== null) {
        if (set.has(current)) {
           return true; // theres a cycle
        } else { 
            set.add(current);
            current = current.next;
        }
    }
    return false; // theres no cycle
}
