//Basic  event handling
const button = document.getElementById("myButton");
const paragraph = document.getElementById("myParagraph");

button.addEventListener("click", () => {
  paragraph.textContent = "New Text";
});

const image = document.getElementById("myImage");
const toggleButton = document.getElementById("toggleButton");

toggleButton.addEventListener("dblclick", function () {
  // Toggle image visibility
  if (image.style.display === "none") {
    image.style.display = "block";
  } else {
    image.style.display = "none";
  }
});

//Mouse events
const originalColor = paragraph.style.backgroundColor;
paragraph.addEventListener("mouseover", () => {
  paragraph.style.backgroundColor = "red";
});

paragraph.addEventListener("mouseout", () => {
  paragraph.style.backgroundColor = originalColor;
});

//kEYBOARD events
const input = document.getElementById("myInput");
input.addEventListener("keydown", (event) => {
  console.log("keypress:", event.key);
});

const output = document.getElementById("output");
input.addEventListener("keyup", () => {
  output.textContent = "current value : " + input.value;
});

//Form events
const form = document.getElementById("myForm");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new formData(form);
  const formDataobj = {};
  formData.forEach((value, key) => {
    formDataobj[key] = value;
  });
  console.log("Form data: " + formDataobj);
});

const select = document.getElementById("mySelect");
const outvalue = document.getElementById("outvalue");
select.addEventListener("change", () => {
  outvalue.textContent = "selected option : " + select.value;
});

//Event delagation
const list = document.getElementById("myList");
list.addEventListener("click", function (event) {
  if (event.target.tagName == "LI") {
    console.log("selected list item: " + event.target.textContent);
  }
});

const parentContainer = document.getElementById("parentContainer");
parentContainer.addEventListener("click", function (event) {
  if (parentContainer.target.tagName == "BUTTON") {
    console.log("Selected button text : " + parentContainer.target.textContent);
  }
});
function addButton() {
  const button = document.createElement("button");
  button.textContent = "Click me";
  parentContainer.appendChild(button);
}
addButton();
