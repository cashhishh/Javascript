//Variable declaration
var a = 10;
console.log(a);
let name = "kashish";
console.log(name);
//constant declaration
const ans = true;
console.log(ans);
//DATA TYPES, Use of typeof operator
var a = 21;
console.log(typeof a);
var course = "btech";
console.log(typeof course);
var answer = false;
console.log(typeof answer);
const marks = { kashish: 19, jatin: 20 };
console.log(typeof marks);
const Friends = ["Aish", "Dhruv", "sam", "Haru"];
console.log(typeof Friends);
//Reassigning variables
let x = 1;
if (x === 1) {
  let x = 2;
  console.log(x);
}
console.log(x);
//Observing error in reassigning variables using const
//const a = 10;
//if (a == 10) {
//  const a = 20;
//console.log(a);
//}
//console.log(a);
