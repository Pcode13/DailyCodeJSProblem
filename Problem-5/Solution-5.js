function twoSum(a){
    let evenNum=a.filter(ele=>ele%2===0).sort((a,b)=>a-b)
    let oddNum=a.filter(ele=>ele%2 !==0).sort((a,b)=>a-b)
    oddNum.push(...evenNum)
     return oddNum
    }
    let nums = [5, 2, 7, 8, 3, 4, 1, 6]
    
    console.log(twoSum(nums))
    