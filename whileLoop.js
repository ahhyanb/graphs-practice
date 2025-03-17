let count = 0;

while (count < 10) {
    console.log("Current count: ", count);
    count++;
}

let nums = [1,2,2,2,3,4,5];
let i = 0;

while (i <= nums.length - 1) {

    if (nums[i] === nums[i + 1]){
        i++;
    }
    console.log(nums[i])
    i++;
}