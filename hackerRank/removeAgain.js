function removeNthNode(head, n) {
    if (head === null) return head;

    let dummy = new ListNode(0);
    // put the head in the dummy
    dummy.next = head;

    let slow = dummy;
    let fast = dummy;

    // move fast to point to the nth steps ahead os slow;
    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }

    // go to the end of the list
    while (fast !== null) {
        slow = slow.next;
        fast = fast.next;
    }
    
    // reassign the next 
    slow.next = slow.next.next;

    return dummy.next;

}

