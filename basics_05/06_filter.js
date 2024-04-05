const coding = ["js","ruby","python","cpp"]

// coding.forEach((item)=>{
//     console.log(item);
// })

//----------FOR EACH DOESN'T RETURN VALUE.----------
let code = coding.forEach((item)=>{
    // console.log(item);
    // return item
    
}) 
// console.log(code);

/*
//--------TO RETURN VALUES WE USE FILTER OPERATOR-----------
const nums = [1,2,3,4,5,6,61,7,84,8,9,91,12]
let mynum = nums.filter((num)=> (num>10))//implicit type

let mynum = nums.filter((num)=>{
    return num>10 //explicit type 
})
console.log(mynum);
*/


//if we want to use for each then we need to push element in an empty array.

// const nums = [1,2,3,4,5,6,61,7,84,8,9,91,12]

// let newnums = []
// nums.forEach((item)=>{
//     if (item>5) {
//         newnums.push(item)
//     }
// })

// console.log(newnums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// const userBooks = books.filter((bk)=>bk.genre=="History")
// const userBooks = books.filter((bk)=>{return bk.publish>2000})
const userBooks = books.filter((bk)=>bk.publish>1995 && bk.genre=="History")
console.log(userBooks);