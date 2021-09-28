var http = require("http")
var server = http.createServer(handleRequest)
var url = require("url")

function handleRequest(req,res){
    var parsedUrl = url.parse(req.url)
    console.log(req.method,req.url,parsedUrl.pathname)
    if(req.method == "GET" && req.url == '/'){
        res.write('Welcome to homepage')
        res.end()
    }
    else if( req.method == "GET" && parsedUrl.pathname == "/about"){
        res.setHeader('Content-Type','text/html')
        res.write('<h2>this is all about NodeJS</h2>')
        res.end();
    }
    else if(req.method == "POST" && parsedUrl.pathname == "/about")
    res.setHeader('Content-Type','application/json')
    res.write(`{message: this is a post request}`)
    res.end();
}
server.listen(5000,()=>{})