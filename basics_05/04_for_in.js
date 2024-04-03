//--------------FOR IN LOOP gives us key except map which is non-iterable
// for in loop for object.(gives key)
const myObject = {
    1:"flash",
    2:"batman",
    3:"spiderman",
    4:"pikashu"
}
// for (const [key,value] in myObject) {
//     console.log(key,":-",value);
// }

for (const key in myObject) {
    // console.log(key);
    // console.log(myObject[key]);
    // console.log(`${key} :- ${myObject[key]}`);
}

//for in loop for array.(gives the index_no./key of the array)
const array1 = [1,2,4,4,5,6,7,8,21,234,55]
for (const value in array1) {
    // console.log(array1[value]);
}

//for in loop for string(gives the index_no./key of the string)
const myString = "Hello Mota Bhaiii"
for (const str in myString) {
    // console.log(myString[str]);
}

//----------------for in loop in map. (non-iterable)----------------
