// Path modules
const path=require('path');
const file="text/Muhammad's Team.txt"
// file extertion
console.log(path.extname(file));
// directory name
console.log(path.dirname(file));
// file name
console.log(path.basename(file));
//route path
console.log(path.resolve("text","Muhammad's Team.txt"));
// Absolute or not
console.log(path.isAbsolute(file));
