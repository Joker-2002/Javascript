//DATE

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let createdDate = new Date(2024,0,23)
// let createdDate = new Date(2024,2,12,5,45)
let createdDate = new Date("01-05-2024")
// console.log(createdDate.toLocaleString())

let mytimestamp = Date.now()
// console.log(mytimestamp);
// console.log(createdDate.getTime());

let newdate = new Date()
console.log(newdate);
console.log(newdate.getMonth()+1);
console.log(newdate.getDay()+1);

console.log(newdate.toLocaleString('default',{
    weekday:"long",
    year:"numeric",
    // dateStyle:"full",
    day:"2-digit",
    // timeStyle:"full"
}))