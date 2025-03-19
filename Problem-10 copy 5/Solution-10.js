function arrList(arr1, arr2) {
    let set2 = new Set(arr2); // Convert arr2 to a Set for quick lookup
    let result = [];

    for (let num of new Set(arr1)) { // Iterate through unique values of arr1
        if (set2.has(num)) {
            result.push(num);
        }
    }

    return result;
}

console.log(arrList([4, 9, 5], [9, 4, 9, 8, 4])); // Output: [4, 9]


function arrList(arr1, arr2) {
    let arr22 = new Set(arr2);
    let arr11 = new Set(arr1);
    
    let data = [...arr11].filter(item => arr22.has(item)); // Convert Set to Array before filtering
    return data;
}

console.log(arrList([4, 9, 5], [9, 4, 9, 8, 4])); // Output: [4, 9]



function arrList(arr1, arr2) {
    return [...new Set(arr1.filter(item => arr2.includes(item)))];
}

console.log(arrList([4, 9, 5], [9, 4, 9, 8, 4])); // Output: [4, 9]




function arrList(arr1, arr2) {
    let result = [];
    
    // Iterate over arr1
    for (let i = 0; i < arr1.length; i++) {
        let found = false;

        // Check if arr1[i] is already in result (to avoid duplicates)
        for (let k = 0; k < result.length; k++) {
            if (result[k] === arr1[i]) {
                found = true;
                break;
            }
        }

        // If arr1[i] is not in result, check if it's in arr2
        if (!found) {
            for (let j = 0; j < arr2.length; j++) {
                if (arr1[i] === arr2[j]) {
                    result.push(arr1[i]);
                    break; // No need to check further once found
                }
            }
        }
    }

    return result;
}

console.log(arrList([4, 9, 5], [9, 4, 9, 8, 4])); // Output: [4, 9]
// The above function has a time complexity of O(n^2) and a space complexity of O(n).