/*
//Concept of "this" function
const user = {
    username: "Debasish",
    loggedin: true,
    greeting:function(){
        console.log(`Hello ${this.username} welcome!!!! `);
        console.log(this);//LOCAL "this" defines the object in node.But Window in Browser.
    }
}

console.log(user.greeting())
console.log(this);//GLOBAL "this" is just an object in node. But Window in Browser.
user.username="debashree"
console.log(user.greeting())
*/

// Arrow function
// 1. first type of defining function
// function chai(username){
//     // username:"Debasish",
//     // console.log(`Give a Chai to ${this.username}`);
//     console.log(`Give a Chai to ${username}`);
// }
// console.log(chai("Ravi"));

// 2. second type of defining function
const chai = function(username){
    // username:"Debasish",
    // console.log(`Give a Chai to ${this.username}`);
    console.log(`Give a Chai to ${username}`);
}
// console.log(chai("Ravi"));

// 3. third type of defining function (explicit type)
const addtwo = (num) => {
    return num + 2 //explicit type where {}brackets are there and return keyword is written.
}
// console.log(addtwo(34));

// (implicit type)
// const raisepower2 = (num) => (num**2)

// console.log(raisepower2(32));


const raisepower2 = (num) => ({username:"hori hori"})
console.log(raisepower2(32));



