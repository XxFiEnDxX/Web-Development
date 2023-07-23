const btn = document.querySelector("#btn");
const h1 = document.querySelector("h1");

// btn.onclick = function(){
//     console.log("You Clicked Me!");
// }

// function scream(){
//     console.log("Ahhhhhhhhhhh");
// }

// btn.onmouseenter = scream;

// const makeRandColor = () => {
//     const n1 = Math.floor(Math.random()*255);
//     const n2 = Math.floor(Math.random()*255);
//     const n3 = Math.floor(Math.random()*255);

//     if (n1<50 && n2<100 && n3<200) {
//         h1.style.color = 'white';
//     }else{
//         h1.style.color = 'black';
//     }
//     return `rgb(${n1},${n2},${n3})`;
// }

// btn.addEventListener('click',function () {
//     const newColor = makeRandColor();
//     document.body.style.backgroundColor = newColor;
//     h1.innerText = newColor;

//     if (condition) {

//     }
// });

// document.querySelector('button').addEventListener('click',function(evt){
//     console.log(evt);
// })

// const input = document.querySelector('input');
// input.addEventListener('keydown',function (e) {
//     // console.log(e.code);
//     switch(e.code){
//         case 'ArrowUp':
//             console.log('Up!');
//             break;
//         case 'ArrowDown':
//             console.log('Down!');
//             break;
//         default:
//             console.log("Ignored!");
//     }
// })
// input.addEventListener('keyup',function () {
//     console.log("KEYUP");
// })

const form = document.querySelector("#shelter");
const color = document.querySelector("#colors");
const input = document.querySelector("#colorName");
// const h1 = document.querySelector('h1');

// form.addEventListener("submit", function (e) {
//   e.preventDefault();

//   let val = input.value;
//   const newli = document.createElement("LI");
//   newli.innerText = val;
//   color.append(newli);

//   input.value = "";
// });


form.addEventListener("input", function (e) { //Track live changes in input
    h1.innerText = input.value;
  });




  // TO stop event bubbbling
//   e.stopPropagation();

// btn.addEventListener('click',function(e){
//     e.stopPropagation();
// })