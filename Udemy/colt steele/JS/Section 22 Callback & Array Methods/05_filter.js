const num = [1,2,3,4,5,6,7,8,9,10];

let eve = num.filter(n => n%2 === 0); 
//create new array with even numbers only
//filter return value only if the condition is true


eve.forEach(ele => {
    console.log(ele);
});