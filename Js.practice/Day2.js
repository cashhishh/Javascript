//Arithmatic operations

var num1 = 10;
var num2 = 20;
var sum = num1 + num2;
console.log("The sum of " + num1 + " and " + num2 + " is " + sum);

var num1 = 10;
var num2 = 5;
var sub = num1 - num2;
console.log("The difference between " + num1 + " and " + num2 + " is " + sub);

var num1 = 10;
var num2 = 20;
var Multiply = num1 * num2;
console.log("The Multiply of " + num1 + " and " + num2 + " is " + Multiply);

var num1 = 10;
var num2 = 20;
var Divide = num1 / num2;
console.log("The Divide of " + num1 + " and " + num2 + " is " + Divide);

var num1 = 10;
var num2 = 4;
var remainder = num1 % num2;
console.log(
  "The remainder by dividing " + num1 + " and " + num2 + " is " + remainder
);

//Assiignent operator
var a = 10;
console.log((a += 3));
var a = 10;
console.log((a -= 3));
 
//Comparison operators
console.log(4 > 3);
console.log(3 < 2);
console.log(3 <= 3);
console.log(6 >= 5);
 
console.log(1 == 1);
console.log(0 == true);

console.log("hello" === 0);
console.log(1 === 1);

//Logical operators
var a = 10;
var b = 20;
if (a > 0 && b > 0) {
    console.log(a);
}
else (console.log(b));

var a = 10;
var b = 8;
if (a > 0 || b > 10) {
    console.log(a);
}
else (console.log(b));

var a = 30;
var b = 21;
if (!(a < 100 && b > 20)) {
    console.log(a);
}
else (console.log(b));


var a = 10;
var type = a >= 0 ? "positive":"negative";
console.log(type);

