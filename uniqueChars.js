/*
8️⃣ Write a function that checks if a string has all unique characters.

✅ Example Input: "abcde"
✅ Example Output: true

✅ Example Input: "hello"
✅ Example Output: false

💡 Hint: Use a Set() or HashMap to track seen characters.
*/

function uniqueChars(s) {
	let set = new Set();

	for (let i = 0; i < s.length; i++) {
		if (!set.has(s[i])) {
			set.add(s[i])
		} else {
			return false;
		}
	}
    return true;
}

console.log(uniqueChars("abcde"));
console.log(uniqueChars("hello"));