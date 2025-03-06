function InsertionOfArrayElements(arr1, arr2){
    let arr3=[];
    for(let i=0;i<arr1.length;i++){
        if(arr2.includes(arr1[i])){
            arr3.push(arr1[i])
        }
    }
    return arr3
}
// The above function has a time complexity of O(n * m) and a space complexity of O(n).
function InsertionOfArrayElements(arr1, arr2) {
    let arr3 = [];
    for (let elem of arr2) {
        if (arr1.includes(elem)) {
            arr3.push(elem);
        }
    }
    
    return arr3;
}
// The above function has a time complexity of O(n * m) and a space complexity of O(n).

function InsertionOfArrayElements(arr1, arr2){
    let arr3=[];
    arr2.forEach(ele=>{
        if(arr1.includes(ele)){
            arr3.push(ele)
        }
    })
    return arr3
}
// The above function has a time complexity of O(n * m) and a space complexity of O(n).

function InsertionOfArrayElements(arr1, arr2){
    let arr3=[];
     arr2.filter(ele=>{
         if(arr1.includes(ele)){
             arr3.push(ele)
         }
     })
     return arr3
 }
 // The above function has a time complexity of O(n * m) and a space complexity of O(n).

const data=InsertionOfArrayElements([1,2,3,4,5,2],[3,4,5,6,2,2])
console.log(data)

/*
The function InsertionOfArrayElements takes two arrays, arr1 and arr2, and returns a new array (arr3) containing elements from arr1 that are also present in arr2.

Time Complexity:
1. The outer loop iterates through each element of arr1, which has a length of n (where n is the length of arr1).
2. Inside the loop, the includes method is called on arr2, which has a length of m (where m is the length of arr2). The includes method has a time complexity of O(m) because it potentially checks each element of arr2 to see if it matches the current element from arr1.
3. Therefore, the overall time complexity of the function is O(n * m), where n is the length of arr1 and m is the length of arr2.

Space Complexity:
1. The function creates a new array, arr3, to store the common elements. In the worst case, if all elements of arr1 are present in arr2, arr3 could have a length of n.
2. Thus, the space complexity is O(n) for the new array arr3. Additionally, the space used by arr1 and arr2 is not counted as it is input space.
3. Overall, the space complexity is O(n) in the worst case.

In summary, the time complexity is O(n * m) and the space complexity is O(n).

*/

function InsertionOfArrayElements(arr1, arr2){
    let set1 =new Set(arr1) 
    let set2 =new Set(arr2)
let arr3 =[...set1].filter(ele=> set2.has(ele))
    return arr3
}

/* 

The function InsertionOfArrayElements takes two arrays, arr1 and arr2, and returns an array containing the elements that are common to both arrays. 

Time Complexity:
1. Creating a Set from arr1 takes O(n) time, where n is the length of arr1.
2. Creating a Set from arr2 takes O(m) time, where m is the length of arr2.
3. The filter operation iterates through the elements of set1, which has a maximum size of n, and checks for each element if it exists in set2. The lookup in a Set is O(1) on average, so this operation takes O(n) time in total.
Overall, the time complexity of the function is O(n + m), where n is the length of arr1 and m is the length of arr2.

Space Complexity:
1. The space used for set1 is O(n) since it stores unique elements from arr1.
2. The space used for set2 is O(m) since it stores unique elements from arr2.
3. The resulting array arr3 will take O(min(n, m)) space in the worst case, where all elements are common.
Thus, the overall space complexity is O(n + m) due to the storage of both sets and the resulting array.

*/

function InsertionOfArrayElements(arr1, arr2){
    let arr3=[];
     for(let i=0;i<arr1.length;i++){
         for(let j=0;j<arr2.length;j++){
             if(arr1[i]===arr2[j] && !arr3.includes(arr1[i]))
             {
                 arr3.push(arr1[i])
             }
         }
     }
     return arr3.join(' ')
 }
 /*
 The function InsertionOfArrayElements takes two arrays, arr1 and arr2, and returns a new array, arr3, containing the common elements between the two input arrays without duplicates.

Time Complexity:
1. The outer loop iterates over each element of arr1, which has a length of n (let's denote it as n = arr1.length).
2. The inner loop iterates over each element of arr2, which has a length of m (let's denote it as m = arr2.length).
3. Inside the inner loop, the function checks if arr3 already includes the current element from arr1, which takes O(k) time in the worst case, where k is the number of elements in arr3.

Therefore, the overall time complexity can be expressed as O(n * m * k). In the worst case, if all elements are common and unique, k could approach n or m, leading to a time complexity of O(n * m * min(n, m)).

Space Complexity:
The space complexity is primarily determined by the storage of the output array arr3. In the worst case, if all elements from arr1 are present in arr2 and are unique, arr3 could contain up to n elements. Thus, the space complexity is O(n) in the worst case.

In summary:
- Time Complexity: O(n * m * min(n, m))
- Space Complexity: O(n)
 */