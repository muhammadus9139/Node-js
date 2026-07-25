// File for submit route

function submit(req, res){

    let data = [];

    req.on('data', (chunk)=>{
        data.push(chunk);
    });

    req.on('end', ()=>{

        let bufferData = Buffer.concat(data);
        let readableData = bufferData.toString();

        console.log(readableData);

        res.write("Form submitted successfully");
        res.end();

    });

}

module.exports = submit;