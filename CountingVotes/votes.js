function voteCount(tally) {
    // Initialize empty object to store each candidate + count
    let count = {};
    // Sort the tally so we can identify last name in a tie
    for (let vote of tally.sort()) {
        // Either increment their vote count or set to 1
        count[vote] ? count[vote]++ : count[vote] = 1;
    }
    // Now compare the values to determine a winner;
    let winner;
    // Create an array for the candidates (keys)
    let candidates = Object.keys(count);
    // And another for their vote tally (value)
    let votes = Object.values(count);
    // First loop starts at 0
    for (let i = 0; i <= votes.length; i++) {
        // Second loop is the index after i
        for (let j = i + 1; j <= votes.length; j++) {
            // Greater than *or* equal since we want last name in a tie
            if (votes[i] >= votes[j]) {
                // Switch to candidates and assign the winner at index i
                winner = candidates[i];
            }
        }
    }
    console.log(winner);
}

voteCount(['veronica', 'mary', 'alex', 'james', 'mary', 'michael', 'alex', 'michael']);