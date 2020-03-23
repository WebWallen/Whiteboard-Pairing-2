function merge(limit, arr) {
    // Initialize empty array to store a match
    let match = [];
    // Create two for loops so we can compare 2 nums
    for (let i = 0; i <= arr.length; i++) {
        // Always compares element as index above i
        for (let j = i + 1; j <= arr.length; j++) {
            // If they are equal to our limit
            if (arr[i] + arr[j] === limit) {
                // Push the indexes in match
                match.push(i, j);
            }
            // Otherwise, return an empty array
            else return [];
        }
    }
    // Return match (sort would take more logic to compare weight)
    return match.sort((a, b) => b - a);
}

console.log(merge(21, [4, 6, 10, 15, 16]));