//singleton [one and only one object of same kind(unique)]
// Object.create() ===> achieved using constructors.

// Multiple instances of Objects can be made using Object literals

/*
const user = {
    name : "Debasish",
    age: 22,
    "full name" : "Debasish Kumar",
    location : 'Sreenagar',
    isonline : true,
    lastonlineon : ["Monday","Tuesday","Sunday"]
}

// access elements using dot operator and ["String"] operator
console.log(user.lastonlineon);
console.log(user.age);

// ["String"] operator
console.log(user["full name"]);
console.log(user["isonline"]);

*/

// introduce a symbol in it

const mySym = Symbol("Key 1")

const client = {
    name : "Hiteshwar",
    age: 23,
    "full name" : "Hiteshwar Ravi Shastri",
    location : 'Sreenagar',
    [mySym] : "Unique ID",// Syntax of writing Symbol
    isonline : false,
    lastonlineon : ["Tuesday","Sunday"]
}

//updation in value according to key
client.location = "Assam"
// console.log(client);

//Symbol is not accessed:-
// console.log(typeof client.mySym);
// console.log(client.mySym);

// //correct way of accessing Symbol:-
// console.log(typeof client[mySym]);
// console.log(client[mySym]);


// if we don't allow any changes in the object 
// Object.freeze(client)
// client.age = 30
// console.log(client);

//fuction inside an object
client.greeting = function() {
    console.log("HELLO FUTURE PROGRAMMERS !!!");
}
// console.log(client);
// console.log(client.greeting());

//function where object value is used in the function
client.greetbyname = function(){
    console.log(`Hello ${this["full name"]} to the world of programming!!!`);
}

console.log(client);
console.log(client.greetbyname());//called by greetbyname() as it is a function