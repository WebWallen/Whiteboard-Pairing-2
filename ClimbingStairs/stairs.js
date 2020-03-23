function climbStairs(steps, cache) {
    // First base case: 0 ways to climb negative stairs
    if (steps < 0) return 0;
    // Second base case: 1 way to climb no stairs
    else if (steps === 0) return 1;
    // Initialize cache to avoid repeated work (if > 1, return cache of steps)
    else if (cache[steps] > 1) return cache[steps];
    // Recursively call function for 1/2/3 hops, add result together, store in cache
    else {
        cache[steps] = climbStairs(steps - 1, cache) +
                       climbStairs(steps - 2, cache) + 
                       climbStairs(steps - 3, cache);
        // After calculations are complete, return cache of steps
        return cache[steps];
    }  
    // Note: anytime you see a problem involving n-1, n-2, n-3... it's a fibonacci
}
console.log(climbStairs(3, Array(3))); // should print 4
console.log(climbStairs(10, Array(10)));  // should print 274
console.log(climbStairs(30, Array(50)));  // should print 53798080