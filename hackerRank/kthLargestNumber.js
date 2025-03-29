function findKth(nums, k) {

    let minHeap = [];

    for (let num of nums) {
        minHeap.push(num);

        if(minHeap.length > k) {
            minHeap.sort((a,b) => a[0] - b[0]);
            minHeap.shift();
        }
    }

    return minHeap[0];

}