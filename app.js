var http = require('http');
var server = http.createServer(function(request,response){
    response.writeHead(200); 
    response.write("fruit");
    setTimeout(function(){
        response.write("response completed");
        response.end();
    },5000);
}).listen(8080,function(){
    console.log("running on port 8080");
});
process.on('uncaughtException',function(err){
    server.close();
});
process.on('SIGKILL',function(err){
    server.close();
});