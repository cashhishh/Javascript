//if-else statements
var a = 10;
if (a > 0) {
  console.log("postive");
} else if (a < 0) {
  console.log("Negative");
} else console.log("zero");

var age = 19;
if (age >= 18) {
  console.log("You can vote");
} else console.log("You can't vote");

var num1 = 10;
var num2 = 20;
var num3 = 5;
if (num1 > num2) {
  if (num1 > num3) {
    console.log(num1 + " is the greatest");
  }
} else if (num2 > num1) {
  if (num2 > num3) {
    console.log(num2 + " is the greatest");
  }
} else console.log(num3 + " is the greatest");

var num = 7;
switch (num) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
}

function mygrading(score) {
  var grade;
  switch (true) {
    case score <= 100 && score > 90:
      grade = "A";
      break;
    case score <= 80 && score > 70:
      grade = "B";
      break;
    case score <= 70 && score > 60:
      grade = "C";
      break;
    case score <= 60 && score > 50:
      grade = "D";
      break;
    case score <= 50 && score > 0:
      grade = "F";
      break;
  }
  return grade;
}
console.log(mygrading(15));


var num = 20;
var result = num % 2 == 0 ? "even" : "odd";
console.log(`${result}`);

var y = 2024;
if (y % 4 == 0) {
  if (y % 100 == 0) {
    if (y % 400 == 0) {
      console.log(y + " is a leap year");
    } else console.log(y + " is not  a leap year!");
  } else console.log(y + " is a leap year");
} else console.log(y + " is not a leap year");


