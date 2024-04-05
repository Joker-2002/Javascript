// -------------------Reduce operator is used to sum up all elements in an array--------------------

const randnum = [34,56,6778,87,89,1223,900]

// let addrandnum = randnum.reduce(function (accumulator,currentvalue) {
//     console.log(`Accumulaor: ${accumulator} and Current Value: ${currentvalue}`);
//     return accumulator + currentvalue
// },0)//initialization of accumulator value

// let addrandnum = randnum.reduce((acc,curr) => acc+curr,0)

// console.log(addrandnum);


//suppose there is a shopping cart with prices of all courses.
const shoppingkart = [
    {
        course : "js course",
        price : 399
    },
    {
        course : "python course",
        price : 1399
    },
    {
        course : "java course",
        price : 1199
    },
    {
        course : "data science course",
        price : 13399
    },
]

const pricetopay = shoppingkart.reduce((acc,item)=>acc+item.price,0)
console.log(pricetopay);