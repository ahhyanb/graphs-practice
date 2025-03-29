// we need to iterate though the whole array and and put them in the map
// if there we come accross the num we store it in the map 
// after iterating through the numbers we then need to sort the values from the most to least
// return the top frequent numbers


function topFrequentElements(nums, k) {

    let map = new Map();

    for (let num of nums) { 
        map.set(num, (map.get(num) || 0) + 1);
    }

    const result = [];

    for (let [num, freq] of map.entries()) {
        result.push([freq, num]);
        if (result.length > k) {
            result.sort((a,b) => a[0] - b[0]);
            result.shift();
        }
    }
    return result.map(([freq, num]) => num);
}

const array = [1,1,1,1,2,2,2,3,3,4,4,5];

console.log(topFrequentElements(array, 2));

