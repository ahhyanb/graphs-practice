function nextGreaterElement(nums) {
    let result = new Array(nums.length).fill(-1); // create a result array containg -1 
    let stack = []; // keeps track of the the seen the numbers

    for (let i = nums.length - 1; i >= 0; i--) { // iterate through the array starting at the end
        while (stack.length > 0 && stack[stack.length -1] <= nums[i]) { // if theres numbers in the stack and the last number in the stack is less than the current number were looking at
            stack.pop(); // take the the number out
        }

        if (stack.length > 0) { // if the stack is greater 0 
            result[i] = stack[stack.length - 1]; // change the current number to the last number in the stack
        }

        stack.push(nums[i]) // put the current number in the stack is the  current number is bigger???
    }

    return result; // return the result
}

let a = nextGreaterElement([1,1,2,4]);
console.log(a);
