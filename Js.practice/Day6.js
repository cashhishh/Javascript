//Array creation and acccess
let nu = [1, 2, 3, 4, 5];
console.log(nu);

function firstLast() {
  let f = nu[0];
  let L = nu[nu.length - 1];
  console.log("The first element is " + f);
  console.log("The last element is " + L);
}
firstLast();

//Array menthods(basic)
let marks = [12, 13, 20, 9, 18];
marks.push(23);
console.log(marks);

marks.pop();
console.log(marks);

marks.shift();
console.log(marks);

marks.unshift(10);
console.log(marks);

//Array methods(Intermediate)
const number = [1, 2, 3, 4, 5];
const doubledNumbers = number.map((num) => num * 2);
console.log(doubledNumbers);

let numbers = [12, 13, 15, 90, 57, 70];
const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers);

const sum = numbers.reduce(
  (accumulator, currentvalue) => accumulator + currentvalue,
  0
);
console.log(sum);
//Array iteration
const array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

array.forEach((a) => {
  console.log(a);
});

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matrix);
const row = 1;
const col = 3;
const element = matrix[row][col];
console.log(`Element at ${row} and ${column} is ${element}`);
