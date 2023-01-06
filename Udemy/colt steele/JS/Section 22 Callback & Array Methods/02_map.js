const num = [1, 2, 3, 4, 5, 6];

// let dbl = num.map(function(num){
//     return num+num;
// })

//With implicit arrow func
let dbl = num.map((num) => num + num);

dbl.forEach((ele) => {
  console.log(ele);
});
