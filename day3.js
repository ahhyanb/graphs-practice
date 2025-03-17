// given an array and a target
// find the 2 numbers that adds up to the target
// return the indices

function twoSum(nums, target) {
	let map = new Map();
	for (let i = 0; i < nums.length; i++) {
		let complement = target - nums[i];
		if (!map.has(complement)) {
			map.set(nums[i], i);
		} else {
			return [map.get(complement), i];
		}
	}
	return null;
}

console.log(twoSum([1, 2, 3, 4], 7));

function mergeIntervals(array) {
	if (array.length === 0) return null;

	array.sort((a, b) => a[0] - b[0]);

	let result = [array[0]];

	for (let i = 1; i < array.length; i++) {
		let prev = result[result.length - 1]; // this is the last array of the array
		let curr = array[i];

		if (prev[1] >= curr[0]) {
			prev[1] = Math.max(prev[1], curr[1]);
		} else {
			result.push(curr);
		}
	}
	return result;
}

console.log(
	mergeIntervals([
		[1, 2],
		[2, 3],
		[3, 4],
		[5, 6],
	])
);


// expanding window method
function longestSubstring(s) {
    let set = new Set();
    let left = 0;
    let maxLength = 0;
    
    for(let right = 0; right < s.length; right++) {
        while(set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }
        set.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;

}
