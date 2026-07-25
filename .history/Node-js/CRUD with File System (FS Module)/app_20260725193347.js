// CRUD operation with File System
// Create, Read, Update, Delete
// CRUD operation with terminal inputs

const fs = require('fs');
const readline = require('readline');


const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


input.question("Enter operation (create/read/update/delete): ", (operation)=>{


    if(operation === "create"){

        input.question("Enter file data: ", (data)=>{

            fs.writeFileSync("data.txt", data);

            console.log("File created successfully");

            input.close();

        });

    }


    else if(operation === "read"){

        let data = fs.readFileSync("data.txt","utf-8");

        console.log("File Data:", data);

        input.close();

    }


    else if(operation === "update"){

        input.question("Enter new data: ", (data)=>{

            fs.appendFileSync("data.txt", data);

            console.log("File updated successfully");

            input.close();

        });

    }


    else if(operation === "delete"){

        fs.unlinkSync("data.txt");

        console.log("File deleted successfully");

        input.close();

    }


    else{

        console.log("Invalid operation");

        input.close();

    }

});