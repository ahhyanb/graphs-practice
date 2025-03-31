function removeNthNode(head, n) {

    let dummy = new ListNode(0);
    dummy.next = head;

    let slow = dummy;
    let fast = dummy;

    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }

    while (fast !== null) {
        slow = slow.next;
        fast = fast.next;
    }

    slow.next = slow.next.next;

    return dummy.next;

}

// traverse down the list
// use two pointers one points to the first node and the next node points to nth + 1 steps ahead
// traverse down until fast reaches null
// if fast reaches null return the slow pointer;