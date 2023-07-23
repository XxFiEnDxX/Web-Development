const person = {
    firstName: 'Amit',
    lastName: 'Kumar'
}

console.log(person);

console.log(person.firstName);
// OR
console.log(person['firstName']);


//modify

person.lastName = 'singh';

person.DOB = '9 june'; // you can also add new attributes like this

console.log(person);

//nesting