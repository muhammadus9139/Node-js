import os from "os";

console.log("Operating System:", os.platform());
console.log("Architecture:", os.arch());
console.log("CPU Cores:", os.cpus().length);
console.log("Home Directory:", os.homedir());