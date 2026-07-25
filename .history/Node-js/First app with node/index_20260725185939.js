// First Node.js Application

console.log("Welcome to Node.js");
console.log("My First Node.js Application");

// Variables
let studentName = "Muhammad Usama";
let university = "COMSATS University";

console.log("Student:", studentName);
console.log("University:", university);

// Simple Function
function greet(name) {
    console.log(`Hello ${name}, Welcome to Node.js`);
}

greet(studentName);

// Current Working Directory
console.log("Current Directory:", process.cwd());

// Node Version
console.log("Node Version:", process.version);

// Operating System
console.log("Platform:", process.platform);