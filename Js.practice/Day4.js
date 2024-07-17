 //FOR Loops

for (let i = 1; i <= 10; i++) {
 console.log(i);
}

let n = 5;
for (let i = 1; i <= 10; i++) {
console.log(n + "*" + i + "=" + n * i);
}

//While loops
let c= 10;
let sum = 0;
i = 1;
while (i <= 10) {
sum += i;
i++;
}
console.log("The sum of first 10 natural numbers is " + sum);

let m = 10;
while (m >= 1) {
console.log(m);
m--;
}

//Do while loop
let a = 1;
do {
console.log(a);
a++;
} while (a <= 5);

function calculateFac(n) {
let factorial = 1;
let i = 1;
if (n < 0) {
console.log("Factorial is not defined for negative numbers");
}
 do {
 factorial = factorial * i;
i++;
} while (i <= n);
return factorial;
}
const number = 9;
const factorialResult = calculateFac(number);
console.log(`The factorial of ${number} is: ${factorialResult}`);

//nested loops
function printTrianglePattern(rows) {
  for (let i = 1; i <= rows; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
      pattern += "* ";
    }
    console.log(pattern);
  }
}

const numberOfRows = 5;
printTrianglePattern(numberOfRows);
