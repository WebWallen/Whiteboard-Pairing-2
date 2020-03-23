// We are given a matrix that represents image coords
// The goal is to rotate the image by 90 degrees
// In other words: flip column & reverse row

function rotateImage(matrix) {
    // Step 1: for each row in matrix, reverse its order
    matrix.forEach(row => row.reverse());
    // Step 2: set up the loops needed to destructure
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < i; j++) {
            // Step 3: reverse and destructure each index
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    return matrix.forEach(m => console.log(m));
}

console.log(rotateImage([
    [1, 2],
    [3, 4]
  ]));

  
console.log(rotateImage([
    [1, 1, 5, 9, 9],
    [2, 2, 6, 0, 0],
    [3, 3, 7, 1, 1],
    [4, 4, 8, 2, 2],
    [5, 5, 9, 3, 3]
]));