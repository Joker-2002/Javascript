/*
Immediately Invoked Function Expression[IIFE]
In JavaScript, an Immediately Invoked Function Expression (IIFE) is a function that runs as soon as it is defined. 
IIFEs are self-contained blocks of code that execute once. 
They are a combination of function expressions, closures, and immediate execution.
The first pair of parentheses creates a function expression. 
The second pair of parentheses immediately invokes the function.

********REASON TO USE IIFE***********
1. To remove the pollution created by global scope/variables
2. A function that runs as soon as it is defined
*/

//normal function
// function chai(name){
//     console.log(`Give one cup of chai to ${name}`);
// }
// chai("Debashree")

//IIFE
(function connect1(){
    //NAMED IIFE
    console.log("DATABASE CONNECTED!!");
})();

// Two consecutive IIFE is written by giving semicolon on first one.
(()=>{
    console.log("DATABASE CONNECTED AGAIN!!!!");
})();

((name)=>{
    console.log(`Here is your kadak chai ${name}`);
})("Kuntal")