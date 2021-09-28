var http  = require("http");
var fs = require("fs");
var fs = require("fs");
var server = http.createServer(handleRequest)
function handleRequest(req,res){
    if(req.method == "GET" && req.url == '/file'){
        fs.readFile('./node.html',(err,content)=>{
            res.write(content)   
            res.end();
           })
    }
    else if(req.method == "GET" && req.url == '/stream'){
        fs.createReadStream('./node.html').pipe(res);
    }

}
server.listen(5555,()=>{})