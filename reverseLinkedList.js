
const linkedList = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: null  // ✅ End of list
        }
    }
};


function reverseList(head) {
    // we create a new variable called prev and set it to null
    let prev = null;
    // we create a new variable called curr and set it to the head that is passed in
    let curr = head; 


    while (curr !== null) { // while curr is not null... 

        let next = curr.next; // create a new variable called next and set it to the this is the next node
        curr.next = prev; // change the curr.next to the prev.. prev is the the last node we saw 
        prev = curr; // set the prev to the current node 
        curr = next; // then set current to next

    }
    return prev; // return the prev which is the last node we saw
}   

console.log(reverseList(linkedList));