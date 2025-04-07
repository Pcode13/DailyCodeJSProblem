function singleNumber(nums) {
    const count = {};
    for (let num of nums) {
      count[num] = (count[num] || 0) + 1;
    }
  
    for (let num in count) {
      if (count[num] === 1) {
        return Number(num);
      }
    }
  }
  
  console.log(singleNumber([2, 2, 1]))  // Output: 1, 5, 0, 3, 11
//
//
//Time Complexity: O(n), where n is the length of the input array nums. This is because we are iterating through the array once to count the occurrences of each number and then iterating through the count object to find the number that appears only once.  