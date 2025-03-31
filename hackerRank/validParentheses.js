function isValid(s) {
    if (s.length < 1) return s;

    // keep track of the seen brackets
    let stack = []
    const pairs = {
        "(": ")",
        "[": "]",
        "{": "}",
    }

    for (let char of s) {
        if (char === "(" || char === "[" || char === "{") {
            stack.push(char);
        } 
        if (char === ")" || char === "]" || char === "}") {

            let last = stack.pop();
            if (pairs[last] !== char) return false;
        }
    }

    return stack.length === 0;

}