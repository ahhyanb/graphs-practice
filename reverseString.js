function reverseString(s) {
    // Convert string to array because strings are immutable
    let arr = s.split("");

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        // Swap the characters at left and right
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        // Move pointers
        left++;
        right--;
    }

    // Convert back to a string and return
    return arr.join("");
}

console.log(reverseString("ryan")); // Output: "nayr"
console.log(reverseString("hello")); // Output: "olleh"
