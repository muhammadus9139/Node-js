

const fs=require('fs');
// console.log(process.argv[2]);
const operation= process.argv[2];
if(operation=='write'){
    const name= process.argv[3];
    const content= process.argv[4];
    const fullname="files/"+name+".txt"
    fs.writeFileSync(fullname,content)
}

else if(operation=='read'){
    const name= process.argv[3];
    const fullname="files/"+name+".txt"
    const readdata=fs.readFileSync(fullname,"utf-8")
    console.log(readdata);     
}

else if(operation=='update'){
    const name= process.argv[3];
    const fullname="files/"+name+".txt"
     const content= process.argv[4];
    fs.appendFileSync(fullname,content);
}

else if(operation=='delete'){
    const name= process.argv[3];
    const fullname="files/"+name+".txt";
    fs.unlinkSync(fullname);
}
else{
    console.log("Invaid operation");
}


