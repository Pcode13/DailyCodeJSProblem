function add(arr1){
    let result=new Set()
 
    arr1.sort((a,b)=>a-b)
   for(let i=0;i<arr1.length-2;i++){
       for(let j=i+1;j<arr1.length-1;j++){
           for(let k=j+1;k<arr1.length;k++){
               if(arr1[i]+arr1[j]+arr1[k]===0){
                    result.add(JSON.stringify([arr1[i], arr1[j], arr1[k]]))
 
               }
           }
       }
   }
   return result
 }
 let a= [-1,0,1,2,-1,-4]
      
 console.log(add(a))
 //Time complexity is O(n^3)
 //Space complexity is O(n)

 function threeSum(nums) {
    nums.sort((a, b) => a - b); // Sort the array to use the two-pointer approach
    let result = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicates

        let j = i + 1, k = nums.length - 1;

        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];

            if (sum === 0) {
                result.push([nums[i], nums[j], nums[k]]);
                j++;
                k--;

                // Skip duplicate elements to avoid duplicate triplets
                while (j < k && nums[j] === nums[j - 1]) j++;
                while (j < k && nums[k] === nums[k + 1]) k--;
            } else if (sum < 0) {
                j++; // Increase j to get a larger sum
            } else {
                k--; // Decrease k to get a smaller sum
            }
        }
    }
    
    return result;
}

// Example usage:
let nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums)); // Output: [[-1,-1,2],[-1,0,1]]
// The above function has a time complexity of O(n^2) and a space complexity of O(n).