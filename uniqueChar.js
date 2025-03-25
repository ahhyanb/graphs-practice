/* 
First Unique Character

Given a string s, return the index of the first non-repeating character.
If no such character exists, return -1.

*/

function findFirstUniqueChar(s) {
    let map = new Map();

    for (let i = 0; i < s.length; i++) {
        if(map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1);
        } else {
            map.set(s[i], 1);
        }
    }

    for (let char of map.keys()) {
        if (map.get(char) === 1) {
            return char;
        }
    } 

    return -1;
    
}

   



console.log(findFirstUniqueChar("leetcode"));
console.log(findFirstUniqueChar("aabb"));

