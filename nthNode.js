function removeNthNode(head, n) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let slow = dummy;
    let fast = dummy;

    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }

    while (fast !== null) {
        fast = fast.next;
        slow = slow.next;
    }

    slow.next = slow.next.next;

    return dummy.next;
}
