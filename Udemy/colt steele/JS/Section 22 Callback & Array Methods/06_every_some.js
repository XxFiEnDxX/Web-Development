//some & every returns boolean True or False

const num = [1,2,3,4,5,6,7];

let ans1 = num.every(x => x>=4) //return false
//check for every condition are true

let ans2 = num.some(x => x>=4) //return true
//check for some condition are true

console.log(ans1); //false
console.log(ans2); //true