const num = 4000000
// console.log(typeof num);

const num1 = new Number(200.6733238)
// console.log(typeof num1);

// console.log(num1.toString());

// console.log(num1.toFixed(3));

// console.log(num1.toExponential(2));

// console.log(num.toLocaleString('en-IN'));

// console.log(num1.toPrecision(3));



// ---------------------------------------------------------------------------
//                 MATHS
console.log(Math);
// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

// console.log(Math.random());
// console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10) + 1);

const min = 100
const max = 201
for (let index = 0; index < 100; index++) {
    console.log(Math.floor(Math.random() * (max - min + 1)) + min)
    
}

/*
    JAVASCRIPT DOESN'T PROVIDE range function in random method.
    so we need to define it manually.
    // RAnge from 5 to 10 output random numbers. 
    let min = 5
    let max = 10
    console.log(Math.floor(Math.random() * (max - min + 1)) + min) 
*/