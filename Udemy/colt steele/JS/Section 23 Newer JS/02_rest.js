function sum(...num1) {
    return num1.reduce((total ,ele) => total + ele);
}

console.log(sum([1,2,3,4,5,6]));