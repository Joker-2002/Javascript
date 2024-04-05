//---------------------------MAP--------------------------

//map operator is used to perform operation within the array itself. It returns the result. It also takes function as argument.
const nums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = nums.map((no)=>{
//     return no + 12
// })

// we can use map within a map. chain linking.Second map refers the value from first chain
const newNums = nums
                    .map((num1) => num1 * 10)
                    .map( (num2)=> num2 + 1)
                    .filter( (num) => num > 50)//it runs based on the given condition.

console.log(newNums);