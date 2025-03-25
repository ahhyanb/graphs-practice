function isValid(s) {
	const stack = [];
	const pairs = {
		")": "(",
		"}": "{",
		"]": "[",
	};

	for (let char of s) {
		if ("({[".includes(char)) {
			stack.push(char);
		} else if (")}]".includes(char)) {
			if (stack.length === 0 || stack.pop() !== pairs[char]) {
				return false;
			}
		}
	}

	return stack.length === 0;
}

function isValidNoMap(s) {
	const stack = [];

	for (let char of s) {
		if (char === "(" || char === "{" || char === "[") {
			stack.push(char);
		} else {
			if (stack.length === 0) return false;

			if (char === ")" && stack.pop() !== "(") return false;
			if (char === "}" && stack.pop() !== "{") return false;
			if (char === "]" && stack.pop() !== "[") return false;
		}
	}

	return stack.length === 0;
}
