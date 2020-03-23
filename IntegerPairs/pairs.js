function findPairs(arr, k) {
    let pairs = [];
    // First, sort the input array
    arr.sort((x, y) => x - y);
    // Create placeholder variables for first and last
    let first = 0;
    let last = arr.length - 1;
    // While first is last (not looped through whole array)
    while (first < last) {
        let sum = arr[first] + arr[last];
        // Check to see if the sum equals input k
        if (sum == k) {
            pairs.push([arr[first], arr[last]]);
            // Increment first (small) and decrement last (large)
            first++;
            last--;
        } else {
            // If the sum is less than k, increment first
            if (sum < k) first++;
            // Else (sum is less than k), decrement last
            else last--;
        }
        // This makes sense because sorted from low-high
    }
    return pairs.forEach(pair => console.log(pair));
}

console.log(findPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11)); // should print '6 5', '7 4', '8 3', '9 2', '10 1'
console.log(findPairs([5, 5, 4], 12)); // should not print anything
console.log(findPairs([99, 45, 38, 1, 68, 78], 100)); // should print '1 99'