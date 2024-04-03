// ------------FOR EACH LOOP IS A HIGH ORDER ARRAY LOOP-----------------

const myArray = [1,2,3,4,5,6,7,12,34,45,56]

// myArray.forEach( function (item) {
//     console.log(item);
// })

// myArray.forEach( (key)=>{
//     console.log(key);

// })

// function printsame(item) {
//     console.log(item);
// }
// myArray.forEach(printsame)

const myarr = [
    {
        lang:"javascript",
        filename:"js"
    },
    {
        lang:"python",
        filename:"py"
    },
    {
        lang:"ruby",
        filename:"rby"
    }
]

myarr.forEach( (item)=> {
    // console.log(item.filename," :- ",item.lang);
})

myarr.forEach( (item,index,array)=> {
    // console.log(item.filename," :- ",item.lang);
    console.log(item.lang,item.filename,index,array);
})

