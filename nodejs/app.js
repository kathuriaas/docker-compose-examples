var http = require('http');

var reqListener = function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write('Hello World');
    res.end();
    }

httpServer = http.createServer(reqListener);

httpServer.listen(8000);