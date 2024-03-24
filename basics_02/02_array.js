const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// just pushing one arry into another
// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

//using concat method
// const all_hero =  marvel_heros.concat(dc_heros)
// console.log(all_hero);

//spread method
// const all_hero = [...marvel_heros,...dc_heros]
// console.log(all_hero);
// const all_hero2 = [...dc_heros,...marvel_heros]
// console.log(all_hero2);

// array under array [flat method is used]
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat()
// console.log(real_another_array);

//chech whether it is array or not
// console.log(Array.isArray("Hitesh"))

//convert string to array
// console.log(Array.from("Hitesh"))

//we have to describe which one to convert into array(key or value)..
console.log(Array.from({name: "hitesh"})) // interesting

//convert individual variable into array
let score1 = 100
let score2 = undefined
let score3 = 300

// console.log(Array.of(score1, score2, score3));