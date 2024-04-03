/*
-------------------TRUTHY VALUE :-----------------------
When a varible is containing some value then we sonsider that variable to be true.
In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context. 
All values are truthy unless they are defined as falsy.

Suppose let var="Ram" [here var is a truthy value as=>] 

let var1 ="Ram"
if (var1) {
    console.log("truthy value");
} else {
    console.log("falsey value");
}


SOME TRUTHY VALUES ARE: "0", 'false', " ", [], {}, function(){}
if (true)
if ({})
if ([])
if (42)
if ("0")
if ("false")
if (new Date())
if (-42)
if (12n)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)
*/

/*
---------------------FALSEY VALUE------------------------
A falsy (sometimes written falsey) value is a value that is considered false when encountered in a Boolean context.

Suppose let var2 = ""

let var2 =""
if (var2) {
    console.log("truthy value");
} else {
    console.log("falsey value");
}

SOME FALSY VALUES ARE: NaN,null,undefined,0,false,-0,0n,"
if (false) 
if (null) 
if (undefined)
if (0) 
if (-0)
if (0n) 
if (NaN)
if ("") 
*/

/*
//Array
const arr = [1,2,34,56,67,88,12,33]
if (arr.length == 0) {//how to look for array with if statement.
    console.log("Empty Array!!");
}else{
    console.log("it contains elements like :");
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
*/

/*
//Object
const myObj={
    1:"hello",
    2:"hi"
}
if (Object.keys(myObj).length==0) {//how to check an object with if statement
    console.log("empty");
} else {
    console.log("Contain elements");
}
*/


// Nullish Coalescing Operator (??): 
//An Error handling operator for null/undefined if null/undefined arrives in a variable it assigns the value proggramed for.
//example:

// let var1
// var1 = 5??80
// console.log(var1);        o/p:- 5

// let var1
// var1 = null??80
// console.log(var1);           //o/p:- 80

// let var1
// var1 = undefined??110
// console.log(var1);             //o/p: 110

let var1
var1 = null??70??undefined??110
console.log(var1);                   //o/p: 70//see from LHS untill value encountered.


//terniary operators (?)

let num = 100
num <50 ? console.log("less than 50") : console.log("greater than 50");