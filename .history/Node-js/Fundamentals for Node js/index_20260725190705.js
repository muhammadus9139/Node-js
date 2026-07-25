// Import Data
import { studentName, university, semester } from "./data.js";

// Import Functions
import { add, multiply, greet } from "./functions.js";

// Variables
console.log("Student:", studentName);
console.log("University:", university);
console.log("Semester:", semester);

// Functions
console.log(greet(studentName));
console.log("Addition:", add(10, 20));
console.log("Multiplication:", multiply(5, 6));

// Conditions
let age = 20;

if (age >= 18) {
    console.log("Eligible to Vote");
} else {
    console.log("Not Eligible");
}

// Loops
console.log("\nFor Loop");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Arrays
const subjects = ["Java", "Node.js", "MongoDB", "React"];

console.log("\nSubjects");
subjects.forEach(subject => {
    console.log(subject);
});

// Objects
const student = {
    name: "Muhammad Usama",
    department: "Computer Science",
    cgpa: 3.5
};

console.log("\nStudent Object");
console.log(student);
console.log(student.name);
console.log(student.department);
console.log(student.cgpa);