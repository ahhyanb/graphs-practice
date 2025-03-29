
// so a brute force approach to this problem would be to go through the string each character at a time 
// put it in array and and then go through the string a second time again starting at the end and comparing each character
// if it goes through the end without finding chars that do not match; the string is a palindrone. if not ints not a palindrone

// to solve this more effeciently we can use a two pointer technique to compare the characters.
// one point wil start at the first character and the second pointer will start at the end
// we first must remove the spaces and an characters that are not in the alphabet
// if we go through the whole string without finding error we will return true 

// Problem: Given a string s, return true if it is a palindrome, or false otherwise.
// Ignore cases and non-alphanumeric characters.



function isPalindrone(s){
    if (s.length <= 1) return true;

    s = s.replace(/[^a-z0-9]/gi, "").toLowerCase();

    // set two pointers
    let left = 0;
    let right = s.length - 1;

    while(left <= right) {
        if (s[left] === s[right]) {
            left++;
            right--;
        }else {
            return false;
        }
    }

    return true;

}