function mergeList(list1, list2) {

    let dummy = new ListNode(-1);
    let current = dummy;

    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next; // move list1 forward
        } else { 
            current.next = list2; // move list2 forward
            list2 = list2.next;
        }
        current = current.next;
    }
    current.next = (list1 !== null) ? list1 : list2;  // Attach remaining nodes
    return dummy.next;
}