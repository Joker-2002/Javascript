//Loop FOR
// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element==5) {
//         console.log("Got 5 !!!");
//         // continue
//         break
//     }
//     console.log(i);
// }

// //multiplication table:
// for (let i = 1; i <= 10; i++) {
//     console.log(`Multiplication Table of ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
// }

//Addition table:
// for (let i = 1; i <= 10; i++) {
//     console.log(`Addition Table of ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} + ${j} = ${i+j}`);
//     }
// }

let arr = [1,3,4,5,7,9,12,43,65,78]
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element);
}