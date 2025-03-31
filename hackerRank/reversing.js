function reverseLinkedList(head) {
	let current = head;
	let prev = null;

	while (current !== null) {
		let next = current.next; // Save the next node
		current.next = prev; // Reverse the pointer
		prev = current; // Move prev one step forward
		current = next; // Move current one step forward
	}

	return prev;
}

// use three pointers to keep track of the values
// current, prev, and next
// traverse down the list as long as the current node is not pointed to the null
