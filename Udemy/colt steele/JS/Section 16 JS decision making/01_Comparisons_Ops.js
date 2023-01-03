console.log(1 > 3);
console.log(-1 < 0);
console.log(1 >= 3);
console.log(3 <= 3);

console.log('a' > 'b');  //false based on asicii values


// == (double equals)
//-> does not depends upon the datatypes

console.log(1 == 1); //true
console.log(1 == '1'); //true

//important cases
console.log(0 == ''); //true
console.log(true == false); //false
console.log(0 == false); //true
console.log(null == undefined); //true

console.log(1 != 1); //false


// === (triple equals) 
//-> does depends upon the datatypes

console.log(1 == 1); //true
console.log(1 == '1'); //false

//important cases
console.log(0 == ''); //true
console.log(true == false); //false
console.log(0 == false); //true
console.log(null == undefined); //true

// console.log(1 !== '2'); //false

