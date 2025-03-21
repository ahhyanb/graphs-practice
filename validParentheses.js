function isValid(s) {
    let stack = [];
    let pairs = {
        ")": "(",
        "}": "{",
        "]": "["
    };

    for (let char of s) {
        // if the character is one these brackets push the current char in the stack
        if (char === "(" || char === "{" || char === "[") {
            stack.push(char);
            // if you come across these chars 
        } else if (char === ")" || char === "}" || char === "]") {
            // check if the stack is empty and return false right away
            if (stack.length === 0) return false;

            // check the top of the stack
            let top = stack.pop();

            console.log("this is the top and tha pairs char", top, pairs[char]);
            
            // if the top of the stack does not match the value of the char in the pairs array
            if (top !== pairs[char]) return false;
        }
    }

    // ✅ If stack is empty, all brackets were matched
    return stack.length === 0;
}

// ✅ Test Cases
// console.log(isValid("()")); // true
// console.log(isValid("()[]{}")); // true
// console.log(isValid("(]")); // false
// console.log(isValid("([)]")); // false
// console.log(isValid("{[]}")); // true
// console.log(isValid("a(b)c")); // true (ignores "a" and "c")
// console.log(isValid("1 + (2 * 3)")); // true (ignores numbers and operators)
// console.log(isValid("(hello) [world] {123}")); // true
// console.log(isValid("(]abc]")); // false
console.log(isValid("{[()]}xyz")); // true
