
const fs=require('fs');
// create file sync way
fs.writeFileSync("files/apple.txt","this is a fruit")

// Delete file sync way
fs.unlinkSync("files/apple.txt")

// read file sync way
const data=fs.readFileSync("files/apple.txt","utf-8");
console.log(data);

// update file data sync way
fs.appendFileSync("files/apple.txt","and this is good for health")

