function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
function logFactorial(number) {
  const result = factorial(number);
  console.log(`Factorial of ${number} is ${result}`);
}
logFactorial(3);

function fibonacci(n) {
  if (n <= 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
function logseries(number) {
  const result = fibonacci(number);
  console.log(`Fibonacci series at position ${number} is ${result}`);
}
logseries(6);

function sumarr(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + sumarr(arr.slice(1));
}
function logsumarr(array) {
  const result = sumarr(array);
  console.log(`The sum of the ${array} is ${result}`);
}
logsumarr([1, 2, 3, 4, 5]);

function findmax(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  const firstEl = arr[0];
  const maxofrest = findmax(arr.slice(1));
  return firstEl > maxofrest ? firstEl : maxofrest;
}
function logmax(array) {
  const result = findmax(array);
  console.log(`The max el in the array is ${result}`);
}
logmax([1, 2, 3, 6, 7, 8]);

function reversestring(str) {
  if (str.length <= 1) {
    return str;
  }
  return reversestring(str.slice(1)) + str[0];
}
function logstr(string) {
  const result = reversestring(string);
  console.log(`The reverse of ${string} is ${result}`);
}
logstr("kashish");

function binarySearch(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) {
    return -1;
  }

  const mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) {
    return mid;
  }

  if (target < arr[mid]) {
    return binarySearch(arr, target, left, mid - 1);
  }

  return binarySearch(arr, target, mid + 1, right);
}

function logBinarySearch(arr, target) {
  const index = binarySearch(arr, target);
  if (index === -1) {
    console.log(`The target ${target} is not in the array.`);
  } else {
    console.log(`The target ${target} is at index ${index}.`);
  }
}

logBinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 5);
logBinarySearch([1, 3, 5, 7, 9], 7);
logBinarySearch([10, 20, 30, 40, 50], 25);
logBinarySearch([1, 1, 1, 1, 1], 1);
logBinarySearch([], 10);

// Recursive function to count the number of occurrences of a target element in an array
function countOccurrences(arr, target, index = 0) {
  // Base case: If the index is out of bounds, return 0
  if (index >= arr.length) {
    return 0;
  }

  // Recursive case: Check if the current element matches the target
  const count = arr[index] === target ? 1 : 0;

  // Add the count of the current element to the count from the rest of the array
  return count + countOccurrences(arr, target, index + 1);
}

// Function to log the count of occurrences of a target element
function logCountOccurrences(array, target) {
  const count = countOccurrences(array, target);
  console.log(
    `The target ${target} occurs ${count} ${
      count === 1 ? "time" : "times"
    } in the array.`
  );
}

// Test cases
logCountOccurrences([1, 2, 3, 4, 5, 2, 3, 2], 2); // Expected output: The target 2 occurs 3 times in the array.
logCountOccurrences([10, 20, 30, 40, 50], 25); // Expected output: The target 25 occurs 0 times in the array.
logCountOccurrences([7, 7, 7, 7], 7); // Expected output: The target 7 occurs 4 times in the array.
logCountOccurrences([1, 1, 1, 1, 1], 1); // Expected output: The target 1 occurs 5 times in the array.
logCountOccurrences([], 10); // Expected output: The target 10 occurs 0 times in the array.
