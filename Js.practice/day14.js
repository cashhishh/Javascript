class person {
  static studentCount = 0;
  constructor(name, age) {
    this.name = name;
    this.age = age;

    person.studentCount++;
    console.log(
      `New student created ${this.name}. total no of students: ${person.studentCount}`
    );
  }

  greet() {
    return `My name is ${this.name} and I am ${this.age} years old`;
  }
  updateage(newAge) {
    this.age = newAge;
  }
  static genericGreet() {
    return "HEY,welcome to my system";
  }
  displayInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}
class student extends person {
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
  }
  getstudentId() {
    return this.studentId;
  }
  greet() {
    return `${super.greet()}. My studentId is ${this.studentId}`;
  }
}
const stu1 = new person("dhruv", 20);
const stu2 = new person("aish", 18);
const stu3 = new person("sam", 21);

const personInstance = new person("kashish", 19);
const studentInstance = new student("kashish", 19, "05714802823");
personInstance.updateage(20);
const genericmsg = person.genericGreet();
console.log(`Final count of student=${person.studentCount}`);
console.log(personInstance.greet());
console.log(`The updated age is ${personInstance.age}`);
console.log(`student id : ${studentInstance.getstudentId()}`);
console.log(studentInstance.greet());
console.log(genericmsg);

class Person2 {
  static studentCount = 0;
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    Person2.studentCount++;
    console.log(
      `New student created: ${this.fullName}. Total number of students: ${Person2.studentCount}`
    );
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  set fullName(newFullname) {
    const [firstName, lastName] = newFullname.split(" ");
    this.firstName = firstName || " ";
    this.lastName = lastName || " ";
  }
  displayInfo() {
    console.log(`Name: ${this.fullName}, Age: ${this.age}`);
  }
}
const student1 = new Person2("Kashish", "Rajput", 20);
student1.displayInfo();
student1.fullName = "Kashish chauhan";
student1.displayInfo();
const student2 = new Person2("Rohan", "Thakur", 22);
const student3 = new Person2("Jatin", "Chauhan", 21);
console.log(`Final count of students: ${Person2.studentCount}`);
