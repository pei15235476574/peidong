let http = require('http');
let url = require('url');
let fs = require('fs');
let sliders = require('./sliders');
http.createServer(function(req,res){
    let {pathname,query} = url.parse(req.url,true);
    if(pathname === '/sliders'){
        res.setHeader('content-type','text/plain;charset=utf8')
        res.end(JSON.stringify(sliders));
    }
}).listen(5050);