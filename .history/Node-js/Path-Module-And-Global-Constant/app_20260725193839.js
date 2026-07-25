// Path module and Global constant

// Path module is used to work with file and directory paths

const path = require('path');


// Path module example

let filePath = path.join(__dirname, "files", "data.txt");

console.log("File Path:", filePath);


// Global constant examples

console.log("Current Directory:", __dirname);

console.log("Current File Name:", __filename);