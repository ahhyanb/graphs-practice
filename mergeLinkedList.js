function mergeLinkedList(list1, list2) {
    let result = new ListNode(0);  // Dummy node
    let current = result;

    let left = list1;
    let right = list2; 

    while (left !== null && right !== null) {
        if (left.val < right.val) {
            current.next = left;
            left = left.next;
        } else {
            current.next = right;
            right = right.next;
        }
        current = current.next;
    }

    current.next = left || right;

    return result.next; // Skip the dummy node
}
