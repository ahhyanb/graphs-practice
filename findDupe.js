// function findDuplicate(nums) {
//     let set = new Set();

//     for (let num of nums) {
//         if(!set.has(num)) {
//             set.add(num)
//         } else {
//             return num;
//         }
//     }

// }

// console.log(findDuplicate([1, 3, 4, 2, 2]));  // Output: 2
// console.log(findDuplicate([3, 1, 3, 4, 2]));  // Output: 3

// function findDuplicate(nums) {
//     let slow = nums[0];
//     let fast = nums[0];

//     console.log("Start slow:", slow);
//     console.log("Start fast:", fast);

//     // ✅ Step 1: Detect the cycle
//     do {
//         slow = nums[slow];  // Move slow one step
//         fast = nums[nums[fast]];  // Move fast two steps

//         console.log("Moving... slow:", slow);
//         console.log("Moving... fast:", fast);
//     } while (slow !== fast);

//     console.log("Cycle detected! slow === fast:", slow);

//     // ✅ Step 2: Find the duplicate
//     slow = nums[0];  // Reset slow to start
//     console.log("Reset slow:", slow, "Fast remains at:", fast);

//     while (slow !== fast) {
//         slow = nums[slow];  // Move slow one step
//         fast = nums[fast];  // Move fast one step
//         console.log("Moving to find duplicate... slow:", slow, "fast:", fast);
//     }

//     console.log("Duplicate number found:", slow);
//     return slow;
// }

// // 🔥 Test the function
// findDuplicate([3, 1, 3, 4, 2]);

function findDuplicate(array) {
    // start at the same point 
    let slow = array[0];
    let fast = array[0];

    do {
        // move slow and fast
        slow = array[slow];
        fast = array[array[fast]];
        // then check ifthey are the same... if they point to the same spot.. stop
    } while (slow !== fast);

    // slow at the start point
    slow = array[0]

    // loop again to find the duplicate
    while (slow !== fast) { // keep looping while this is true;
        slow = array[slow];
        fast = array[fast];
    }

    return slow;
}

// ✅ Test Cases
console.log(findDuplicate([1, 2, 3, 4, 3]));  // Output: 3
console.log(findDuplicate([2, 5, 1, 1, 4, 3]));  // Output: 1
console.log(findDuplicate([1, 3, 4, 2, 2]));  // Output: 2
