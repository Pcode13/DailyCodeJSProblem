function add(arr1,arr2){
    // let a=[]
    // for(let i=0;i<arr1.length;i++){
    //          a.push(arr1[i]+arr2[i])
    // }
    // return a
    return arr1.map((item,index)=>item+arr2[index])
}
let a= [1,2,3,4]
       let b=[4,5,6,9]
console.log(add(a,b))
// Compare this snippet from Problem-11/Solution-11.js: