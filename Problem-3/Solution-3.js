function searchInsertPosition(nums,target){
    let n=nums.sort((a,b)=>a-b)
    console.log(n)
  for(let i=0;i<n.length;i++){
      if(n[i] >= target){
          return i
      }
  }
  return nums.length
}

let  nums = [25,3,5,6,8,15]
let target = 7

const d=searchInsertPosition(nums,target)
console.log(d)

 /*
The function `searchInsertPosition` has a time complexity of O(n log n) due to the sorting operation `nums.sort((a,b)=>a-b)`, where n is the number of elements in the input array `nums`. The sorting step dominates the overall complexity. After sorting, the function iterates through the sorted array with a for loop, which has a time complexity of O(n). However, since O(n log n) is greater than O(n), the overall time complexity remains O(n log n).

The space complexity of the function is O(1) if we consider the space used by the input array itself and the sorting operation, which is done in place. However, if we consider the space used by the sorting algorithm (which may require additional space depending on the implementation), it could be O(n) in the worst case for some sorting algorithms. In summary, the space complexity is O(1) for in-place sorting, but could be O(n) depending on the sorting algorithm's implementation.
 */

function searchInsertPosition(nums, target) {
    let left = 0;
    let right = nums.length;

    while (left < right) {
        let middle = Math.floor((left + right) / 2);
        if (nums[middle] < target) {
            left = middle + 1;
        } else {
            right = middle;
        }
    }
    return left;
}



