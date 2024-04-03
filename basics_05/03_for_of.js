// FOR OF LOOP(Specially for array,objects and strings) gives us the values accept map(it gives key) and on Object non-iterable

//for of loop for array.(gives value)
const array1 = [1,23,54,56,78,89,75,100]
for (const val of array1) {
    // console.log(val);
}

//for of loop for string.(gives value)
const myString = "I Love Programming !! "

for (const word of myString) {
    // console.log(word);
}

// -------------MAP in JavaScript--------------
/* 
Map in Javascript is a strict version of Objects.
The Map object holds key-value pairs and remembers the original insertion order of the keys. 
Any value (both objects and primitive values) may be used as either a key or a value.

MAP STORES ONLY UNIQUE VALUE UNLIKE OBJECTS.

Diffence between Object and Map.
1. Map Stores unique value whereas object can store identical value.
2. Map remembers the order of storing element but Object doesn't remember the order.

*/
//for of loop for map.(gives key)
const map = new Map()
map.set('IND','INDIA')
map.set('BRA','BRAZIL')
map.set('FRA','FRANCE')

// console.log(map);
for (const [key,value] of map) {
    // console.log(key," :- ",value);
}

//----------------for of loop for object (not iterable).------------
