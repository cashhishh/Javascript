//selecting and manipulating elements
var element1 = document.getElementById("one");
element1.innerText = "Hey,i'm changed!";

var element2 = document.getElementsByClassName("Heading");
element1.style.backgroundColor = "red";

//Creating and appending new elements
var element3 = document.createElement("div");
element3.textContent = "This is a new text";
document.body.appendChild(element3);
while (document.body.firstChild) {
  element3.appendChild(document.body.firstChild);
}

var element4 = document.createElement("li");
element4.textContent = "chips";
var ul = document.getElementById("shoppingList");
ul.appendChild(element4);

//removing element
function removeElement() {
  var elementToRemove = document.getElementById("myheading");
  if (elementToRemove) {
    elementToRemove.remove();
  } else {
    console.log("Element not found!");
  }
}

function removeLastItem() {
  var ulElement = document.getElementById("myList");
  if (ulElement && ulElement.lastElementChild) {
    ulElement.removeChild(ulElement.lastElementChild);
  } else {
    console.log("element not found");
  }
}

//Modifying attributes and class
function changeImage() {
  var iElement = document.getElementById("myImage");
  if (iElement) {
    iElement.src = "img2.jpg";
    iElement.alt = "updateimg";
  } else {
    console.log("img not found");
  }
}

function addClass() {
  var heading = document.getElementById("myheading");
  heading.classList.add("highlight");
}

function removeClass() {
  var heading = document.getElementById("myheading");
  heading.classList.remove("highlight");
}

//event listeners
var paragraph = document.getElementById("myParagraph");
paragraph.addEventListener("click", function () {
  paragraph.textContent = "New text after click!";
});

var myElement = document.getElementById("myElement");
myElement.addEventListener("mouseover", function () {
  myElement.classList.add("highlight-border");
});
myElement.addEventListener("mouseout", function () {
  // Remove the CSS class to reset border color
  myElement.classList.remove("highlight-border");
});
