function shortestString(a, b) {
    let countA = 0;
    let countB = 0;
    for (char of a) {
        countA += char.charCodeAt();
    }
    for (char of b) {
        countB += char.charCodeAt();
    }
    if (countA <= countB) return a;
    else return b;
}

console.log(shortestString("abcd123", "abc123"));   // should print "abc123"
console.log(shortestString("abc", "abcd"));         // should print "abc"
console.log(shortestString("abc123a", "abc123b"));  // should print "abc123a"
console.log(shortestString("9876", "987"));         // should print "987"
console.log(shortestString("6a", "6b"));            // should print "6a"

// console.log(smallestString("a", "b"));
// console.log(smallestString("a1", "a2"));
// console.log(smallestString("a10", "a2"));

// Run time complexity: O(n) 
// Reasoning = amount of work doesn't change
// The amount of inputs in this case remains constant