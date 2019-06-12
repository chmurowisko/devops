var express = require('express');
var app = express();
var path = require('path');
var port = process.env.port || 1337;



app.get('/', function(req, res){
    res.writeHead(200, {"Content-Type":"text/html"});
    if(process.env.STAGE == null){
        res.end('<h2>Stage: Unknown</h2>' + ' </br>' + '<p>hello');
    } else{
        res.end('<h1>Version: 1.0</h1>' + '<h2>Stage: ' + process.env.STAGE + ' </h2>' + '<h3> ' + process.env.RELEASE + '</h3>');
    }
});



app.listen(port, function(){
    console.log('App is listening at port:', port);
});

