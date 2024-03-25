//constructor method
const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "Ravi"
tinderUser.mail = "abc@gmail.com"
tinderUser.isLoggedin = false

// console.log(tinderUser);

//Object under Object
const regularUser = {
    email : "some@mail.com",
    fullname : {
        userName : {
            firstname : "Debasish",
            lastname : "Kumar"
        }
    }
}
// console.log(regularUser);
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userName);
// console.log(regularUser.fullname.userName.firstname);
// console.log(regularUser.fullname.userName.lastname);

/*
let obj1 = {1:"a",2:"b",3:"c"}
let obj2 = {4:"d",5:"e",6:"f"}
let obj3 = {7:"g",8:"h",9:"i"}

//merge or add three differnet on=bjects into one.
const obj4 = {obj1,obj2,obj3}
console.log(obj4);

//spread method
const obj4 = {...obj1,...obj2,...obj3}
console.log(obj4);

//assign function
const obj4 = Object.assign({},obj1,obj2,obj3)
console.log(obj4);
*/

/*
//methods of Object
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(Object.keys(regularUser));
console.log(Object.values(regularUser));
console.log(Object.entries(regularUser));
*/

//objects inside array
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "h00088@gmaisasal.com"
    },
    {
        id: 3,
        email: "hsaas@gdfdmail.com"
    },
]

// console.log(users);
// console.log(users[1]);
// console.log(users[1].email);


//DESTRUCTURING OBJECT
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

//accessing without destructuring
// course.courseInstructor 

//accessing with destructuring course.courseInstructor ==>courseInstructor
// const {courseInstructor} = course
// console.log(courseInstructor);

//destructuring course.courseInstructor ==> teacher
const {courseInstructor:teacher} = course
console.log(teacher);
