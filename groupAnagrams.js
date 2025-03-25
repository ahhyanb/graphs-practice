function groupAnagrams(array) {
    let map = new Map();

    for (let word of array) {
        let sortedWord = word.split("").sort().join("");

        if (!map.has(sortedWord)) {
            map.set(sortedWord, [word]);
        } else {
            map.get(sortedWord).push(word)
            
            
        }
    }

    return [...map.values()];
}


const anagrams = ["eat", "tea", "tan", "ate", "nat", "bat"];

let result = groupAnagrams(anagrams);

console.log(result);
