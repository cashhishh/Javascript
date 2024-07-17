//Function declaration
function isEven(number) {
  return number % 2 == 0;
}
function isOdd(number) {
  return number % 2 !== 0;
}
let number = 17;
if (isEven(number)) {
  console.log(number + " is even");
} else {
  console.log(number + " is odd");
}

function square(num) {
  return num * num;
}
let num = 10;
let result = square(num);
console.log("The square of the number is " + result);

//Function expression
function findMax(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
let p = 10;
let q = 17;
let maxNumber = findMax(p, q);
console.log("The maximum number is " + maxNumber);

function strings(str1, str2) {
  return str1 + " " + str2;
}
let str1 = "Kashish";
let str2 = "Rajput";
let lastString = strings(str1, str2);
console.log("The concatenate string is " + lastString);

//Arrow functions
const sum = (num1, num2) => num1 + num2;

let g = 1;
let j = 2;
let last = sum(g, j);
console.log("The sum of " + g + " and " + j + " is " + last);

const containsSpecialCharacters = (str) => {
  const symbols = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

  return symbols.test(str);
};

let testString1 = "Hello! How are you?";
let testString2 = "Hello123";

console.log(
  `"${testString1}" contains special characters:`,
  containsSpecialCharacters(testString1)
);
console.log(
  `"${testString2}" contains special characters:`,
  containsSpecialCharacters(testString2)
);

//Function parameters and default value
function product(a, b = 1) {
  return a * b;
}
console.log(product(3));

function greet(name, age = 18) {
  return `Hello! ${name}.You are ${age} years old`;
}
console.log(greet("Kashish", 20));
console.log(greet("Kashish"));

//High order function
function callManyTimes(func, times) {
  for (i = 0; i < times, i++; ) {
    func();
  }
}
function greet() {
  console.log("Hello");
}
callManyTimes(greet, 10);

function applyFunc(fn1, fn2, value) {
  const result1 = fn1(value);
  const finalResult = fn2(result1);
  return finalResult;
}
function double(x) {
  return x * 2;
}
function addThree(x) {
  return x + 3;
}
const Finalvalue = applyFunc(double, addThree, 10);
console.log(Finalvalue);
