/* 

Given a string s, find the length of the longest substring without repeating characters.

lengthOfLongestSubstring("abcabcbb");  // Output: 3  ("abc")
lengthOfLongestSubstring("bbbbb");     // Output: 1  ("b")
lengthOfLongestSubstring("pwwkew");    // Output: 3  ("wke")
lengthOfLongestSubstring("");          // Output: 0  (Empty string)
lengthOfLongestSubstring("dvdf");      // Output: 3  ("vdf")

create a variable called set and initialize it to a new set to keep track of the unique chars
create a var called left to keep track of one point
and a new var called maxLength to store the maxLength seen

create a for loop and initialize right as another pointer 
as we iterate check each char to see if its in the set, if it is, 
delete the char where the left pointer is currently located until you delete the dupe
if theres not dupe, add the char in the set and update the maxLength 
keep going until you go through all the char 
and return the final maxLength
*/

function longestSubstring(s) {
	let set = new Set();
	let left = 0;
	let maxLength = 0;

	for (let right = 0; right < s.length; right++) {
		while (set.has(s[right])) {
			set.delete(s[left]);
			left++;
		}
		set.add(s[right]);
		maxLength = Math.max(maxLength, right - left + 1);
	}

	return maxLength;
}

console.log(longestSubstring("abcabcbb")); // 3
console.log(longestSubstring("")); // 0
