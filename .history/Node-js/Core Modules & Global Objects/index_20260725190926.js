// Core Modules
import os from "os";
import path from "path";

// Custom Module
import { add, subtract } from "./math.js";

console.log("===== Core Modules =====");

console.log("OS:", os.platform());
console.log("Architecture:", os.arch());

console.log("Current Directory:", process.cwd());
console.log("Node Version:", process.version);

console.log("Joined Path:", path.join("users", "documents", "node"));

console.log("\n===== Custom Module =====");

console.log("Addition:", add(20, 10));
console.log("Subtraction:", subtract(20, 10));

console.log("\n===== Global Objects =====");

console.log("Current File:", import.meta.url);
console.log("Platform:", process.platform);
console.log("Process ID:", process.pid);

setTimeout(() => {
    console.log("setTimeout Executed");
}, 1000);

console.log("Program End");