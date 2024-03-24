const name = "debasish"
const age = 22

// console.log("My Name is " +name+" And My age is: "+age);
console.log(`My name is ${name} and my age is ${age}`);

const Name1 = new String("    i love proggramming in dreams!!!!     ")
console.log(Name1);
console.log(Name1.length);


let gameName = "htasjan-lsnalksnl"
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));