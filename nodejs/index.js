var express = require('express');
var app = express();
var path = require('path');
var port = process.env.port || 1337;



app.get('/', function(req, res){
    res.writeHead(200, {"Content-Type":"text/html"});
    if(process.env.STAGE == null){
        res.end('<h2>Stage: Unknown</h2>');
    } else{
        res.end('<h2>Stage: ' + process.env.STAGE + ' </h2>');
    }
});



app.listen(port, function(){
    console.log('App is listening at port:', port);
});

