var http = require('http');

var server = http.createServer(function(request, response){
    console.log(request.url);
    if(request.url === '/horas'){
        response.end((new Date()).toDateString());
        
    }
    response.end('Hello World!!');
});

server.listen(8080);