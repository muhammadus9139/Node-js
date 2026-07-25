// File for routing handling

const form = require('./form');
const submit = require('./submit');

function routes(req, res){

    if(req.url === "/"){
        form(req, res);
    }

    else if(req.url === "/submit"){
        submit(req, res);
    }

    else{
        res.write("Page not found");
        res.end();
    }

}

module.exports = routes;