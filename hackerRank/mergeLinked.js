function mergeLinkedList(list1, list2) {

    let dummy = new ListNode(0);
    let current = dummy;
    
    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    if (list1 !== null) dummy.next = list1;
    if (list2 !== null) dummy.next = list2;

    return dummy.next;
}

// to merige list we need to start with a dummy node to hold the new list
// we need to tracerse down the the linked list
// if either list is null stop 
// during the loop check the value of the list1 and list2 if the list is smaller push it to the the dummy 
// if theres any left overs push it to the end