console.log(Math.max(2,3,5,7));

const nums = [23,1,4,64,5,23,42234,235,346];

console.log(...'hello');

console.log(Math.max(...nums));

//Spread arrays

const cats = ['blue','scout','rocket'];
const dogs = ['Rusty','Wyatt'];

const allPets = [...cats, ...dogs , 'pie'];

console.log(allPets);

//Spread object

const feline = {
    legs: 4,
    family: "Felidae"
};

const pet = {
    ...feline ,
    isPet: 'true'
};

console.log(pet);