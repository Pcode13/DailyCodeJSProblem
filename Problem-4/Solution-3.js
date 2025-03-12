function twoSum(a,t){
    let data=[]
    for(let i=0;i<a.length;i++){
        for(let j=i+1;j<a.length;j++){
             if(a[i]+a[j]===t){
            data.push(i)
        }
        }
       
    }
   return data 
}
let nums = [2, 7, 11, 15,20];
let target = 31;
console.log(twoSum(nums, target))
// The above function has a time complexity of O(n^2) and a space complexity of O(n).

function twoSum(a,t){
    let set={}
    for(let i=0;i<a.length;i++){
        let com =t-a[i]
        if(set.hasOwnProperty(com)){
            return[set[com],i]
        }
        set[a[i]]=i
    }
   return []
}
// The above function has a time complexity of O(n) and a space complexity of O(n).

function twoSum(a,t){
   
    for(let i=0;i<a.length;i++){
        let com =t-a[i]
        let j=a.indexOf(com,i+1)
        if(j!==-1){
            return [i,j]
        }
    }
  return []
}
// The above function has a time complexity of O(n^2) and a space complexity of O(1).


function twoSum(a,t){
    let start=0;
    let end=a.length-1;
    let arr=[]
     while(start < end){
         let val = a[start]+a[end]
         if(val==t){
             break;
         }else if(t < val){
             end --
         }else{
             start++
         }
     }
     arr=[start,end]
   return arr
 }
// The above function has a time complexity of O(n) and a space complexity of O(1).