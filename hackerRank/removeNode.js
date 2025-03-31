function removeNthNodeFromEnd(head, n) {

    let dummy = new ListNode(0);
    dummy.next = head;

    let slow = dummy;
    let fast = dummy;

    for (let i = 0; fast <= n; i++){
        fast = fast.next;
    }

    // move both pointers forward until fast hits null
    while (fast !== null) {
        slow = slow.next;
        fast = fast.next;
    }

    slow.next = slow.next.next; // remove the node slow is in put assigning the node after the node you want to remove;

    return dummy.next;
}

