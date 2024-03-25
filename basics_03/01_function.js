// --------SIMPLE FUNCTION-------------
function print() {
    console.log("H");
    console.log("E");
    console.log("L");
    console.log("L");
    console.log("O");
}

// print()
// console.log(typeof print);

function addTwoNumbers(num1,num2){
    return num1+num2
}
let result = addTwoNumbers(9,10)
// console.log(`Result is: ${result}`);

function loggedInmessage(username) {
    // if (username == undefined) {
    //     console.log("Please Enter an username");
    //     return
    // }
    if (!username) {
        console.log("Please Enter an username");
        return
    }
    return`Hello ${username} Welcome to the site!!!!`;
}

// loggedInmessage("Rohit")
// loggedInmessage()
// console.log(loggedInmessage("Debasish"));

/*
adding single value
function calculatemultiplevalues (num1){
    return num1
}
console.log(calculatemultiplevalues(3));
*/

/*
//for multiple values
function calculatemultiplevalues(val1,val2,...num1){
    return num1
}

// using rest operator
function calculatemultiplevalues(...num1){
    return num1
}
console.log(calculatemultiplevalues(200,65,342,645,12,456,78));

//adding multiple numbers given as a arguments
function calculatemultiplevalues(...num1){
    let element = 0
    for (let index = 0; index < num1.length; index++) {
        element += num1[index];
    }
    return element
}
console.log(calculatemultiplevalues(200,65,342,645,12,456,78));

*/
/*
//---------OBJECTS AND FUNCTIONS-------------
//accessing objects in a function
const user = {
    username:"Ravi Sharma",
    mail:"Ravi@gmail.com",
    isLoggedIn:true
}

function objecthandle(obj) {
    console.log(`Hello ${obj.username} your mail is ${obj.mail}. And you are currently online(${obj.isLoggedIn})`);
}

//giving the objectname
// objecthandle(user)
//giving the entire object as parameter.
objecthandle({
    username:"Ravi Sharma",
    mail:"Ravi@gmail.com",
    isLoggedIn:true
})
*/

//---------------ARRAY AND FUNCTION-------------
const newArray = [23,45,67,78,89,12,32]

function returnarray(arr){

    // return arr[1] //to return 2nd element
    // console.log(arr[0]);
    // console.log(arr[1]);
    // console.log(arr[2]);
    // console.log(arr[3]);
    // console.log(arr[4]);
    // console.log(arr[5]);
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        console.log(element);
    }

}

// returnarray(newArray)

// returnarray([23,45,67,78,89,12,32])
// console.log(returnarray(newArray));



