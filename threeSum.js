// // we want to find three numbers that will equal to zero
// // cant have duplicates
// // return the array of the three numbers

// function threeSum(array) {
// 	array.sort((a, b) => a - b); // ✅ Step 1: Sort the array
// 	let result = [];

// 	for (let i = 0; i < array.length - 2; i++) {
// 		if (i > 0 && array[i] === array[i - 1]) continue; // ✅ Skip duplicate `i` values

// 		let left = i + 1;
// 		let right = array.length - 1;

// 		while (left < right) {
// 			let sum = array[i] + array[left] + array[right];

// 			if (sum === 0) {
// 				result.push([array[i], array[left], array[right]]);

// 				// ✅ Skip duplicate `left` values
// 				while (left < right && array[left] === array[left + 1]) left++;

// 				// ✅ Skip duplicate `right` values
// 				while (left < right && array[right] === array[right - 1]) right--;

// 				left++;
// 				right--;
// 			} else if (sum < 0) {
// 				left++;
// 			} else {
// 				right--;
// 			}
// 		}
// 	}

// 	return result;
// }

// console.log(threeSum([1, 0, -1, -2]));

// console.log(threeSum([-1, 0, 1, 2, -1, -4]));  
// // ✅ Output: [[-1, -1, 2], [-1, 0, 1]]

// console.log(threeSum([0, 1, 1]));  
// // ✅ Output: [] (no valid triplets)

// console.log(threeSum([0, 0, 0, 0]));  
// // ✅ Output: [[0, 0, 0]] (only one unique triplet)

// console.log(threeSum([-2, 0, 1, 1, 2]));  
// // ✅ Output: [[-2, 0, 2], [-2, 1, 1]]



function threeSome(nums) {

    nums.sort((a,b) => a - b);

    let result = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i-1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {

            let sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);

                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right -1]) right--;

                left++;
                right--;
            }
            else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;

}