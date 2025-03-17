function mergeIntervals(array) {
	if (array.length === 0) return [];

	array.sort((a, b) => a[0] - b[0]);

	/* after you sort the array 
        put the first array in a variable called result to keep track of the what was already is seen
        iterate through the array
        for every array check if the last number from the prev array is bigger than the first number in the current array
        if the prev is bigger, then update the last number with the last numbner of the curr array
        if the current is smaller push the pair in the result
        after iterating return result  
    */

	let result = [array[0]];

	for (let i = 1; i < array.length; i++) {
		let prev = result[result.length - 1];
		let current = array[i];

		if (prev[1] >= current[0]) {
			prev[1] = Math.max(prev[1], current[1]);
		} else {
			result.push(current);
		}
	}
	return result;
}

console.log(
	mergeIntervals([
		[1, 2],
		[2, 3],
		[4, 5],
	])
);
