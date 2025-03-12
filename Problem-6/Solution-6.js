function countStr(str){
    let dataStr=""
     let count =1;
     for(let i=1;i<str.length;i++){
        if(str[i] ===str[i-1]){
            count++
        }else{
            dataStr += count + str[i-1]
            count =1
        }
     }
       dataStr += count + str[str.length-1]
    return dataStr 
 }
 console.log(countStr("aabbaca"))
// The above function has a time complexity of O(n) and a space complexity of O(1).
 

function countStr(str) {
    if (str.length === 0) return ""; // Handle empty string case

    let result = [];
    let count = 1;

    for (let i = 1; i < str.length; i++) {
        if (str[i] === str[i - 1]) {
            count++; // Increment count if the character repeats
        } else {
            result.push(count, str[i - 1]); // Push count and character to the array
            count = 1; // Reset count for the new character
        }
    }

    result.push(count, str[str.length - 1]); // Add the last character and its count

    return result.join(""); // Convert array to string for optimized performance
}

console.log(countStr("aabbaca")); // Output: "2a2b1a1c1a"
// The above function has a time complexity of O(n) and a space complexity of O(n).