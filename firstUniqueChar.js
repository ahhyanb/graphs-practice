// function firstUniqueChar(s) {
//     let map = new Map();

//     for (let i = 0; i < s.length; i++) {
//         if (!map.has(s[i])) {
//             map.set(s[i], [i]);
//         } else { 
//             map.get(s[i]).push(i);
//         }
//     }

//     for (values of map.values()) {
//         if (values.length === 1) {
//             return values[0];
//         }
//     }
    
//     return -1;

// }

function firstUniqueChar(s) {
    const map = new Map();

    for (let char of s) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    for (let i = 0; i < s.length; i++) {
        if (map.get(s[i]) === 1) return i;
    }

    return -1;
}


console.log(firstUniqueChar("leetcode"));     // 0   ('l')
console.log(firstUniqueChar("loveleetcode")); // 2   ('v')
console.log(firstUniqueChar("aabb"));         // -1ce