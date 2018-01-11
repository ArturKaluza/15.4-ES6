// zadanie 1.
console.log('zadanie 1.');
let string1 = "Hello";
let string2 = "world";

let greeting = `${string1} ${string2}`;

console.log(greeting);

// zadanie 2.
console.log('zadanie 2.');
const multiply = (a, b = 1) => a*b;

console.log(multiply(2,5));
console.log(multiply(2));
console.log(multiply(4,6));

//zadanie 3.
console.log('zadanie 3.');

const average = (...args) => args.reduce(((sum, item) => sum + item), 0)/args.length;

console.log(average(3,3,3,3,3));
console.log(average(1,2,3,4,5));
console.log(average(9,8,7,6));

//zadanie 4. 
console.log('zadanie 4.');

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average(...grades));

// zadanie 5.
console.log('zadanie 5.');

const array = [1, 4, 'Iwona', false, 'Nowak'];

const [, ,firstname, ,lastname] = array;
console.log(firstname);
console.log(lastname);