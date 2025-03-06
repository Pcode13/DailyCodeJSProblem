function reversedArray(arr1){
    let arr3=[];
     for(let i=arr1.length-1;i>0;i--){
                 arr3.push(arr1[i])
     }
     return arr3
 }
 
 let  inputArray = [1, 2, 3, 4, 5, 6]
 
 const data=reversedArray(inputArray)
 console.log(data)

 /*
 The function `reversedArray` takes an array `arr1` as input and returns a new array `arr3` that contains the elements of `arr1` in reverse order. 

**Time Complexity:**
The time complexity of the function is O(n), where n is the number of elements in the input array `arr1`. This is because the function iterates through the input array once, from the last element to the first, pushing each element into the new array `arr3`. The loop runs n times, resulting in a linear time complexity.

**Space Complexity:**
The space complexity is also O(n). This is due to the fact that the function creates a new array `arr3` that stores all n elements of the input array in reverse order. Thus, the space required grows linearly with the size of the input array.

In summary, both the time and space complexity of the `reversedArray` function are O(n).
 */

function reversedArray(arr1){
    let resArry=arr1.slice().reverse()
    return resArry
 }


/*
The function `reversedArray` takes an array `arr1` as input and reverses it using the built-in `reverse` method. 

Time Complexity:
The time complexity of the `reverse` method is O(n), where n is the number of elements in the array. This is because the method needs to iterate through the array to swap elements from the start and end until it reaches the middle. Therefore, the overall time complexity of the `reversedArray` function is O(n).

Space Complexity:
The space complexity of the function is O(1) if we consider that the reversal is done in place, meaning it does not require additional space proportional to the input size. However, since the `reverse` method returns a new reference to the same array (modifying the original array), we can say that the space complexity is O(1) in terms of additional space used, but the original array is modified. If we consider the input and output as part of space usage, it could be viewed as O(n) due to the input array size. 

In summary, the time complexity is O(n) and the space complexity is O(1) for additional space used, but the original array is modified in place.

*/