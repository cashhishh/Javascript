function throwError() {
  try {
    let undefinedVar = undefinedVar.property;
  } catch (error) {
    console.log("opssie,error:", error.message);
  }
}
throwError();

function divide(a, b) {
  try {
    if (a % b == 0) {
      throw new Error("Matches are harmful");
    }
    return a / b;
  } catch (error) {
    console.log("oopsie.error", error.message);
    return null;
  }
}
console.log(divide(12, 12));
console.log(divide(23, 67));

function processInput(input) {
  try {
    if (typeof input !== "number") {
      throw new Error("NOT RIGHT INPUT");
    }
    console.log("processing input", input);
    let result = input * 10;
    console.log("Result: ", result);
  } catch (error) {
    console.log("oopsie error:", error.message);
  } finally {
    console.log("Files and db has been closed");
  }
}
processInput(10);
processInput("kash");

class customError extends Error {
  constructor(message) {
    super(message);
    this.name = "custom error";
  }
}
function throwERR() {
  throw new customError("opsie,error");
}
try {
  throwERR();
} catch (error) {
  if (error instanceof customError) {
    console.error("Caught custom error:", error.message);
  } else {
    console.error("Caught unexpected error:", error);
  }
}

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function validateInput(input) {
  try {
    if (typeof input !== "string" || input.trim() === "") {
      throw new ValidationError("Input must be a non-empty string");
    }
    console.log("Input validation passed:", input);

    return true;
  } catch (error) {
    if (error instanceof ValidationError) {
      console.error("Validation Error:", error.message);
    } else {
      console.error("Unexpected Error:", error);
    }
    return false;
  }
}

// Examples
validateInput("");
validateInput("Hello");
validateInput(123);
validateInput(undefined);
validateInput("   ");
validateInput("Valid Input");

function RandomReSErr() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNum = Math.random();
      if (randomNum > 0.5) {
        resolve("Promise resolved");
      } else {
        reject(new Error("Error hai"));
      }
    }, 2000);
  });
}
RandomReSErr()
  .then((result) => {
    console.log("Promise resolved", result);
  })
  .catch((error) => {
    console.error("promise rejected", error.message);
  });

async function handlePromise() {
  try {
    let finalResult = await RandomReSErr();
    console.log("promise resolved", finalResult);
  } catch (error) {
    console.error("prmise rejected", error.message);
  }
}
handlePromise();

const url = "https://example.com/kash-url";
fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error("INVALID URL");
    }
    return response.json();
  })
  .then((data) => {
    console.log("data received", data);
  })
  .catch((error) => {
    console.error("Fetched error: ", error.message);
  });

async function fetchData() {
  const url = "https://example.com/invalid-url";
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log("Data received:", data);
  } catch (error) {
    console.error("Fetch error:", error.message);
  }
}
fetchData();
