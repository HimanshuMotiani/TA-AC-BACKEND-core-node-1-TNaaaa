var http = require("http")
var server = http.createServer(handleRequest)
function handleRequest(req,res){
    res.statusCode = 201;
    res.setHeader(`Content-Type`,`text/plain`)
    res.end("Welcome");
}
server.listen(4444,()=>{})