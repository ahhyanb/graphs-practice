function twoSum(nums, target) {


    const map = new Set();

    for (let e of nums) {
        map.add(e);
    }

    for ( let e of map) {
        let dif = Math.max(e, target) - Math.min(e, target);
        if (map.has(dif)) {
            return [e, dif]
        }
    }

};


const input = [2,7,11,15];

const destination = 9;

const sample = twoSum(input, destination);

console.log(sample);