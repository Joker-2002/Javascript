let arr = [1,2,3,4,5,54,6]
// console.log(typeof arr);

// let newarr = new Array(1,2,3,4,5,7,8)
// console.log(typeof newarr);


/* insertion and deletion is done using push and pop operation. 
    And it is done from last index [behaves like stack].
    There is a special operation called UNSHIFT and SHIFT
    (if we want to insert or delete element from first index.)
    */

    // SIMPLE PUSH POP OPERATION.
// console.log(arr[6]);
// arr.push(9)
// arr.push(912)
// arr.push(92)
// arr.push(19)
// console.log(arr);
// arr.pop()
// arr.pop()
// console.log(arr);

    // UNSHIFT AND SHIFT
// console.log(arr);
// // arr.shift()
// arr.unshift(90)
// arr.unshift(88)
// console.log(arr);

/*    ------CONCEPT OF SHALLOW COPY AND DEEP COPY------
    JavaScript array-copy operations create shallow copies. 
    (All standard built-in copy operations with any JavaScript objects 
        create shallow copies, rather than deep copies).

        DEEP COPY => A deep copy of an object is a copy whose properties do not share the same references.
        SHALLOW COPY => A shallow copy of an object is a copy whose properties share the same references.
*/

// Join in array
// let newarr = arr.join()//converts the resulting array into string.

// console.log(arr);
// console.log(newarr);

// ===============Concept of slice and spice=============================

// const newarr = [1,2,3,4,5,6,7,8,9]
// // console.log("A: ",newarr);

// console.log(newarr.slice(2,6));
// console.log("B: ",newarr);

// // console.log(newarr.splice(2,6));
// // console.log("C: ",newarr);

// console.log(newarr.splice(2,6,"heheh",123));
// console.log("C: ",newarr);

const arr1 = [1, , 3, 4, , 6];
console.log(arr1.splice(1, 2)); // [empty, 3]
console.log(arr1); // [1, 4, empty, 6]

