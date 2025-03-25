class MinStack {
	constructor() {
		this.stack = [];
		this.minStack = [];
	}

	push(value) {
		this.stack(value);

        let top = this.minStack[this.minStack.length - 1]; 
		if (this.minStack.length === 0 || value <= top) {
			this.minStack.push(value);
		}
	}

    pop() {
        let popped = this.stack.pop();
        if (popped === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }
        return popped;
    }
}
