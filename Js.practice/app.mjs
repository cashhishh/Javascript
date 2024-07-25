import { addNumbers } from "./calculator.mjs";

const result = addNumbers(5, 3);
console.log(`Result of adding 5 and 3: ${result}`);

import { me } from "./calculator.mjs";
console.log(me.name);
console.log(me.age);
console.log(me.greet());

import { square, cube } from "./calculator.mjs";
const number = 10;
console.log(`The square of the ${number} `, square(number));
console.log(`The cube of the ${number} `, cube(number));

import divide from "./calculator.mjs";
const num = 200;
console.log(`the ans of ${num} is`, divide(num));

import * as all from "./calculator.mjs";
const no = 20;
console.log("PI", all.PI);
console.log("Euler", all.EULER);
console.log(`Square of the ${no} `, square(no));
console.log(`cube of the ${no} `, cube(no));

import _ from "lodash";
const nums = [1, 2, 3, 4, 5];
const squarednums = _.map(nums, (n) => n * n);
console.log("squared numbers", squarednums);
const allSum = _.sum(nums);
console.log("sum of all the numbers", allSum);
const sortednumber = _.sortBy(nums);
console.log("sorted numbers are", sortednumber);

import axios from "axios";
axios
  .get("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    console.log("response from server");
    console.log(response.data);
  })
  .catch((error) => {
    console.error("error fetching data", error);
  });
