import path from "path";

console.log("File Name:", path.basename(import.meta.url));
console.log("Extension:", path.extname("index.js"));
console.log("Join Path:", path.join("Node", "Core", "index.js"));