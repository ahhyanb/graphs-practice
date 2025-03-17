

    // create a map to keep track of the seen numbers
    // iterate through the numbers
    // for each number subtract the number from the target to get the difference
    // for each difference check the map if its already in the map
    // if its in the map return the current index and the index of the difference
    // if the difference is not in the map, add the number to the map along with its index
    // if there are no pairs return null


    function twoSum(nums, target) {
        let map = new Map();

        for (let i = 0; i < nums.length; i++) {
            let diff = target - nums[i];
            if (map.has(diff)) {
                return [map.get(diff), i];
            }
            map.set(nums[i], i);
        }
        return null;
    }

    console.log(twoSum([1,2,3], 8)); // null