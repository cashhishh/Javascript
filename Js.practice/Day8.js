//  Template literals
const name = "kash";
const age = 19;

const message = `Hello, my name is ${name} and I am ${age} years old.`;

console.log(message);

const course = "Engineering";
const percentile = "85.1";
const college = "MAIT";

const Bio = `
HEY! I am pursuing ${course}.
I am in ${college}.
I got ${percentile} in jee mains.
`;
console.log(Bio);

//Destructing
//Array destructing
const numbers = [1, 2, 3, 4, 5];
const [first, second] = numbers;
console.log(`Fisrt number = ${first}`);
console.log(`Second number = ${second}`);
//object destructing
let book = {
  Author: "Kashish",
  Title: "Ashes of LOVE",
  Type: "Qoutations",
};
const { Author, Title } = book;
console.log(`The author is ${Author} and the title is ${Title}`);

//spread and rest operator
//spread operator
let a = [21, 31, 41, 51];
let b = [90, 80, 70, 60];
let c = [...a, ...b];
console.log(c);

//rest operator
function sum(...num) {
  return num.reduce((i, current) => i + current, 0);
}
console.log(sum(1, 2, 3));
console.log(sum());

//Default parameter
function product(u, o = 1) {
  return u * o;
}
console.log(product(4, 5));
console.log(product(4));

//Enhanced objects literals
let me = {
  firstName: "Kashish",
  lastName: "Chauhan",
  age: 19,
  fullname() {
    return `My name is ${this.firstName} ${this.lastName}`;
  },
  greet() {
    return `Hello, I am ${this.age} years old.`;
  },
};
console.log(me);
console.log(me.fullname());
console.log(me.greet());

const propertyName = "age";
const propertyValue = 19;
let insp = {
  firstName: "Kashish",
  lastName: "Chauhan",
  [propertyName]: propertyValue,
  [`is${propertyName}GreaterThan20`]: propertyValue > 20,
};
console.log(insp.firstName);
console.log(insp.age);
console.log(insp.isageGreaterThan20);
