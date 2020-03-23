function balancedBrackets(str) {
    // Start with a base case of situations we know should return false
    if (str.includes('([)') || str.includes('[(]') || str.includes('({)') || str.includes('{(}')
       || str.includes('{[}') || str.includes('[{]')) return false;
    // If those pass, initialize counter variables for another test
    let square = 0;
    let circle = 0;
    let curly = 0;
    // Loop through string and store count of every bracket type
    for (let char of str) {
        if (char === '[' || char === ']') square += 1;
        if (char === '(' || char === ')') circle += 1;
        if (char === '{' || char === '}') curly += 1; 
    }
    // If count is even, that means they're balanced 
    return square % 2 === 0 && circle % 2 === 0 && curly % 2 === 0;
}

console.log(balancedBrackets('[]{}()'))
console.log(balancedBrackets('[{[()]}]'))
console.log(balancedBrackets('[({}}]'))