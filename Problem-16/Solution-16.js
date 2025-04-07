/**
 * Function to find and print all pairs (a, b) such that a ∈ arr1, b ∈ arr2, and a + b = x.
 * @param {number[]} arr1 - First array of integers.
 * @param {number[]} arr2 - Second array of integers.
 * @param {number} x - Target sum.
 */
function findPairs(arr1, arr2, x) {
    for (let a of arr1) {
        for (let b of arr2) {
            if (a + b === x) {
                console.log(a, b);
            }
        }
    }
}

// Example usage:
let arr1 = [-1, -2, 4, -6, 5, 7];
let arr2 = [6, 3, 4, 0];
let x = 8;

findPairs(arr1, arr2, x);
// Output:
/**
 * Function to check if there exists a pair (one from each array) that sums to x.
 * @param {number[]} arr1 - First array of integers.
 * @param {number[]} arr2 - Second array of integers.
 * @param {number} x - Target sum.
 * @returns {boolean} - True if a valid pair exists, false otherwise.
 */
function hasPairWithSum(arr1, arr2, x) {
    // Sort both arrays
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);

    let left = 0; // Pointer for arr1 (smallest element)
    let right = arr2.length - 1; // Pointer for arr2 (largest element)

    while (left < arr1.length && right >= 0) {
        let sum = arr1[left] + arr2[right];

        if (sum === x) {
            return true; // Found a valid pair
        } else if (sum < x) {
            left++; // Increase sum by moving the left pointer forward
        } else {
            right--; // Decrease sum by moving the right pointer backward
        }
    }

    return false; // No valid pair found
}

// Example usage:
let arr1 = [-1, -2, 4, -6, 5, 7];
let arr2 = [6, 3, 4, 0];
let x = 8;

console.log(hasPairWithSum(arr1, arr2, x)); // Output: true (4 from arr1 and 4 from arr2 make 8)
// The above function has a time complexity of O(n log n) due to sorting and a space complexity of O(1).
// The function uses a two-pointer approach to find a pair that sums to x.