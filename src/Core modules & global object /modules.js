// Core modules

 const fs=require('fs');

 const os=require('os');
console.log(os.platform());
console.log(os.hostname());
console.log(os.cpus());


 fs.writeFileSync("dummy.txt","trying with modules");
