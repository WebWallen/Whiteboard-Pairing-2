function moveZeroes(arr) {
    let zeroes = [];
    let updated = [];
    for (num of arr) {
        if (num !== 0) {
            updated.push(num);
        } else {
            zeroes.push(num);
        }
    }
    return updated.concat(zeroes);
}

console.log(moveZeroes([4, 2, 1, 5]));
console.log(moveZeroes([0, 3, 1, 0, -2]));
