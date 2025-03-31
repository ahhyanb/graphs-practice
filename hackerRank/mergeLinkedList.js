function mergeLinkedList(list1, list2) {

    // create a dummy node to hold the merged list
    let dummy = new LinkedList(-1);
    let current = dummy; //tracks where the to merge

    let left = list1;
    let right = list2;

    while(list1 !== null && list2 !== null) {

        if (left.val < right.val) {
            dummy.next = left;
            left = left.next;
        } else {
            dummy.next = right;
            right = right.next;
        }

        current = current.next; // move forward
    }

    if (left !== null) current.next = left;
    if (right !== null) current.next = right;

    return dummy.next;
  
}



// we need a way to traverse down the list
// and as we go down we compare each number of the list 
// make sure to sort them in order.
// if there are any leftovers in either list add them to the end