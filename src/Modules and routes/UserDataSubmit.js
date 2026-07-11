const queryString = require('querystring')

function UserDataSubmit(req,resp){

    let databody=[]
    req.on('data',(chunk)=>{
        databody.push(chunk)
    })

    req.on('end',()=>{
        let formdata=Buffer.concat(databody).toString();
        let readabledata=queryString.parse(formdata);
         let dataString = "my name is " + readabledata.name + " and my password is " + readabledata.password;
         console.log(dataString);
         
    })

  resp.write(` 
     <h1>You can get data from user form here</h1>
    `)
}

module.exports=UserDataSubmit;
