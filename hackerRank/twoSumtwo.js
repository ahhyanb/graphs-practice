function twoSumII(nums, target) {

    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let sum = nums[left] + nums[right];

        if (sum < target) {
            left++;
        }
        if (sum > target) {
            right--;
        }
        if (sum === target) {
            return [left, right];
        }

    }

    return -1;

}

// to use the two pointers we can add one point to the front and one point at the beggining
// we sum the numbers at current position 
// if the sum is too large move the right to the left one space 
// if the sum is too small move the left to the right
// keep going until you have the target
// return the spots of the left and right if theres an answer