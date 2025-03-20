function add(val){
    isFlag=false
 newArry=val.split('')
    newArry.forEach(e=>
    {
        if((e=='(' && newArry.includes(')'))   || (e == ')' && newArry.includes('(')) ){
            isFlag=true
        }else if((e=='[' && newArry.includes(']'))   || (e == ']' && newArry.includes('['))){
            isFlag=true
        }else if((e=='{' && newArry.includes('}'))   || (e == '}' && newArry.includes('{'))){
            isFlag=true
        }else{
            isFlag=false
        }
        
    })
    return isFlag
}
console.log(add("()"))
console.log(add("[()()]{}"))
console.log(add("([]"))
console.log(add("([{]})"))
//Time complexity is O(n)

/**
 * Function to check if the brackets in a string are balanced.
 * @param {string} s - The input string containing brackets.
 * @returns {boolean} - True if the brackets are balanced, false otherwise.
 */
function isBalanced(s) {
    const stack = [];
    const bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char); // Push opening brackets onto the stack
        } else if (char === ')' || char === '}' || char === ']') {
            if (stack.length === 0 || stack.pop() !== bracketMap[char]) {
                return false; // Mismatch or unbalanced closing bracket
            }
        }
    }

    return stack.length === 0; // Ensure no unmatched opening brackets remain
}

// Example usage:
console.log(isBalanced("[{()}]")); // Output: true
console.log(isBalanced("[()()]{}")); // Output: true
console.log(isBalanced("([]")); // Output: false
console.log(isBalanced("([{]})")); // Output: false
// The above function has a time complexity of O(n) and a space complexity of O(n).
// The function uses a stack to keep track of the opening brackets encountered so far.


let patterns = [
    { opening: "[", closing: "]" },
    { opening: "{", closing: "}" },
    { opening: "(", closing: ")" }
];

let inp = "[({})]";
inp = inp.split(""); // Convert string to an array

function isBalanced(input, patterns) {
    let stack = [];

    for (let char of input) {
        let isOpening = patterns.some(p => p.opening === char);
        let isClosing = patterns.some(p => p.closing === char);

        if (isOpening) {
            stack.push(char); // Push opening bracket
        } else if (isClosing) {
            if (stack.length === 0) return false; // No matching opening bracket

            let last = stack.pop();
            let correspondingPattern = patterns.find(p => p.closing === char);

            if (!correspondingPattern || correspondingPattern.opening !== last) {
                return false; // Incorrect nesting
            }
        }
    }

    return stack.length === 0; // If stack is empty, brackets are balanced
}

// Testing the function
console.log(isBalanced("[({})]", patterns));  // true
console.log(isBalanced("[()()]{}", patterns)); // true
console.log(isBalanced("([]", patterns));     // false
console.log(isBalanced("([{]})", patterns));  // false
console.log(isBalanced("{[()]}", patterns));  // true
console.log(isBalanced("{[(])}", patterns));  // false
// The above function has a time complexity of O(n) and a space complexity of O(n).