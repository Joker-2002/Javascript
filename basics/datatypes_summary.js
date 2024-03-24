/*
 THERE ARE TWO TYPES OF DATATYPES:
  1. PRIMITIVE (call by value):----
        Generally 7 types
    i.   String ==> "123"
    ii.  Number ==>  123
    iii. Boolean ==> True/False
    iv.  Null ==> null(just empty)
                  (datatype object)
    v.   Undefined ==> undefined(a variable where datatype is defined but value not assigned)
                       (datatype undefined)
    vi.  Symbol ==> Symbol(where Every Symbol() call is guaranteed to return a unique Symbol.)
                    (datatype symbol)
                //symbol
                    const id = Symbol("123")
                    const anotherid = Symbol("123")

                    console.log(id===anotherid);
                    console.log(typeof id);
    vii. BigInt ==> (is used to store very large number)
                // BigInt
                    const BigInt = 12345671717171n
                    console.log(typeof BigInt);

  2. NON PRIMITIVE/REFERENCE TYPE (call by reference):----
        Generally 3 types(datatypes of all non primitive data are Objects)
    
    i.    Array
                // Array
                    const cars = ["Audi","Bmw","Honda","Urus"]
                    console.log(cars);
                    console.log(typeof cars);
    ii.   Objects
                // Object
                    let Myobj = {
                        name : "Debu",
                        age : 22,
                        mail : "test@mail.com"
                    }
                    console.log(Myobj);
                    console.log(typeof Myobj);
    iii.  Functions(datatype Object Function)
                //Fuction
                    let myFunct = function(){
                        console.log("HELLO WORLD")
                    }
                    console.log(typeof myFunct);

----------------Javascript is a dynamically typed language.----------

*/

//symbol
// const id = Symbol("123")
// const anotherid = Symbol("123")

// console.log(id===anotherid);
// console.log(typeof id);

// // BigInt
// const BigInt = 12345671717171n
// console.log(typeof BigInt);

// Array
// const cars = ["Audi","Bmw","Honda","Urus"]
// console.log(cars);
// console.log(typeof cars);

// // Object
// let Myobj = {
//     name : "Debu",
//     age : 22,
//     mail : "test@mail.com"
// }
// console.log(Myobj);
// console.log(typeof Myobj);

//Fuction
let myFunct = function(){
    console.log("HELLO WORLD")
}
// console.log(myFunct);
console.log(typeof myFunct);
