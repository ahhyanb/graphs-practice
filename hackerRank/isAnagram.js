
function isAnagram(s1, s2) {
    return s1.split("").sort().join("") === s2.split("").sort().join("");
}


function isAnagramMap(s1, s2) {

    if(s1.length !== s2.length) return false;

    let map = new Map();

    // place all the letters from the first string into the map
    for (let char of s1) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    // now check each char in s2 against the map.. 
    // if there a match decrement the amount in the set
    // if theres no match return false
    // if theres more of that character in the set it will be less than 0 so return false theres no matching
    for (let char2 of s2) {
        if(!map.has(char2)) return false;
        map.set(char2, (map.get(char2) - 1));
        if (map.get(char2) < 0) return false; 
    }
    return true; // if it goes through the whole string withough find any descrepancy return true
}

