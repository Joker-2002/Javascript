// problem of scope arises with [var]keyword and using {}brackets
let a = 300
if (true) {
    let a = 100
    const b = 200
    // console.log("inner : ",a);
}
// console.log("outer : ",a);

function one(){
    let username = "me"

    function two(){
        let website = 'youtube'
        console.log(username);
    }
    two()
    // console.log(website);
}
// one()



//----------------------INTERESTING FACT---------------------

console.log(addone(9));// can access 'addone' anywhere

function addone(num){
    return num+1
}
console.log(addone(9));


// console.log(addtwo(10)); //Cannot access 'addtwo' before initialization
const addtwo = function(num){
    return num + 2
}
console.log(addtwo(10));