export function addNumbers(a, b) {
  return a + b;
}

const me = {
  name: "kash",
  age: 19,
  greet() {
    return `Hi, my name is ${this.name} and i am ${this.age} years old`;
  },
};

export { me };

let x;
export function square(x) {
  return x * x;
}

export function cube(x) {
  return x * x * x;
}

const divide = (x) => {
  return x / 100;
};
export default divide;
export const PI = 3.14159;
export const EULER = 2.71828;
