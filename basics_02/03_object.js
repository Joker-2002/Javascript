//singleton [one and only one object of same kind(unique)]
// Object.create() ===> achieved using constructors.

// Multiple instances of Objects can be made using Object literals

const user = {
    name : "Debasish",
    age: 22,
    "full name" : "Debasish Kumar",
    location : 'Sreenagar',
    isonline : true,
    lastonlineon : ["Monday","Tuesday","Sunday"]
}

console.log(user.lastonlineon);
console.log(user["isonline"]);

console.log(user["full name"]);
