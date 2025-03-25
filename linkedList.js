class LinkedList {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

const a = new LinkedList(1);
const b = new LinkedList(2);
const c = new LinkedList(3);

a.next = b;
b.next = c;

// traversing linked list

// let current = a;

// while (current !== null) {
//     console.log(current.value);
//     current = current.next;
// }

// reversing list

function reverseList(list) {
    let previous = null; // start with the previous as null
    let current = list; // start with the whole li

    while (current !== null) {
        let next = current.next; // stage the next node... which is current.next
        current.next = previous; // from the current node's next make it to the previous 
        previous = current; // make previous the current node... 
        current = next; // make the current node next... 
    }
    return previous; // return thr previous node???
}

/* 
original list 
1 -> 2 -> 3 -> null


first iteration 
    previous = null;
    current = 1 -> 2 -> 3 -> null;

    next = 2 -> 3 -> null
    current.next = null
    previous = 1 -> null
    current = 2 -> 3 -> null

second iteration
    previosu = 1 -> null
    current = 2 -> 3 -> null 

    next = 3 -> null
    current.next =  1 -> null
    previous = 2 -> 1 -> null
    current = 3 -> null

third iteration 
    previous = 2 -> 1 -> null
    current = 3 -> null

    next = null
    current.next = 2 -> 1 -> null
    previous = 3 -> 2 -> 1 -> null
    current = null

return previosu 3 -> 2 -> 1 -> null
*/

function reverseList(list) {
    let prev = null;
    let curr = list;

    while (curr !== null) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}