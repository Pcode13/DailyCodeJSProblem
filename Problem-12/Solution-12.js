function add(arr1){
    let b=arr1.toString().split('')
    console.log(b)
    let sum =0
    for(let i=0;i<b.length;i++){
        sum += Number(b[i])
    }
return sum

return arr1
        .toString()  // Convert number to string
        .split('')   // Split string into an array of digits
        .map(Number) // Convert each character to a number
        .reduce((sum, num) => sum + num, 0); // Sum all digits

}
let a= 73893848
     
console.log(add(a))