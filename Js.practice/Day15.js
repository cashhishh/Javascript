//Closures
function outerFunction(outervaiable) {
  function innerFunction() {
    return outervaiable;
  }
  return innerFunction;
}
const myinnerFunction = outerFunction("Hey kash");
console.log(myinnerFunction());

function createCounter() {
  let counter = 0;
  function increment() {
    counter++;
  }
  function log() {
    console.log(counter);
  }
  return {
    increment,
    log,
  };
}
const mycounter = createCounter();
mycounter.increment();
mycounter.log();
mycounter.increment();
mycounter.increment();
mycounter.log();

//practical closures
function createID() {
  let ID = 0;
  function incrementId() {
    ID++;
    return `Id_${ID}`;
  }
  return incrementId;
}
const myid = createID();
console.log(myid());
console.log(myid());
console.log(myid());

function user(name) {
  function greet() {
    return `Good morning ${name}. Hope your day goes well`;
  }
  return greet;
}
const mygreet = user("kashish");
console.log(mygreet());

function createFunctionArray(size) {
  const functionArray = [];
  for (let i = 0; i < size; i++) {
    functionArray[i] = (function (index) {
      return function () {
        console.log(index);
      };
    })(i);
  }

  return functionArray;
}
const funcArr = createFunctionArray(4);
funcArr.forEach((fn) => fn());

function createCollection() {
  const items = [];
  function addItem(item) {
    items.push(item);
    console.log(`added ${item}`);
  }
  function deleteItem(item) {
    const index = items.indexOf(item);
    if (index > -1) {
      items.splice(index, 1);
      console.log(`Item removed ${item}`);
    } else {
      console.log(`${item} not found`);
    }
  }
  function listItem(item) {
    console.log("current items in the collection: ");
    items.forEach((item) => console.log(item));
  }
  return {
    addItem,
    deleteItem,
    listItem,
  };
}
const collection = createCollection();
collection.addItem("APPLE");
collection.addItem("BANANA");
collection.listItem();
collection.deleteItem("BANANA");
collection.listItem();
