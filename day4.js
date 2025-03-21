function twoSum(nums, target) {
    let map = new Map ();

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];

        if (map.has(complement)) {
            return [map.get(complement), i];
        } else {
            map.set(nums[i], i);
        }
    }
    return null;
}


console.log(twoSum([1,2,3], 5));

function mergeIntervals(array) {

    let prev = 
    
    for(let i = 0; i < array.length; i++) {

    }

}