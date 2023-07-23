let arr = [1,2,3]

//push & pop

// Push - add to end
// Pop - remove from end


console.log(arr) //[1,2,3]

arr.push(4,5) // add multiple 4 and 5 at the end of the array
arr.push(6)     // add single value 6 at the end of array

console.log(arr)//[ 1, 2, 3, 4, 5, 6 ]

arr.pop() //remove last element of the array

console.log(arr) //[ 1, 2, 3, 4, 5 ]

//shift & unshift
// Shift - remove from start
// Unshift - add to start

arr.shift(); //remove 1
arr.shift(); //remove 2

console.log(arr) //[ 3, 4, 5 ]

arr.unshift(1,2) //add 1 and 2 at the beginning of the array

console.log(arr) //[ 1, 2, 3, 4, 5 ]


//More Methods

// concat - merge arrays 
// => const arr = arr1.concat(arr2);

// includes - look for a value  t/f
// console.log(arr.includes(23)) //false;

// indexOf - just like string.indexOf
// => arr.indexOf(5) //4

// join - creates a string from an array
// console.log(arr.join()); // "1,2,3,4,5"

// reverse - reverses an array
// => arr.reverse()

// slice - copies a portion on an array
// arr = [1,2,3,4,5,6,7,8]
// => arr.slice(4) // [5,6,7,8]
// => arr.slice(0,4) // [1,2,3,4]


// splice - removes/replaces elements

// sort 
let newArr = [3,2,1,25,20]
newArr.sort((a,b)=>a-b) // ascending order
console.log(newArr) //[1,2,3,20,25]

