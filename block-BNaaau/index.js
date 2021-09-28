var http = require("http");
var fs = require("fs");
var url = require("url")
var server = http.createServer(handleRequest)

// function handleRequest(req,res){
// console.log(req,res)
// }
// server.listen(5000,()=>{})

// function handleRequest(req,res){
// res.write(`My first server in NodeJS`)
// res.end();
// }
// server.listen(5001,()=>{})

// function handleRequest(req,res){
// console.log(req.headers["user-agent"]);
// res.end();
// }
// server.listen(5555,()=>{})

// function handleRequest(req,res){
// console.log(req.url,req.method);
// res.setHeader("Content-type",'text/plain')
// res.write(req.url,req.method)
// res.end();
// }
// server.listen(5566,()=>{})


//doubt

// function handleRequest(req,res){
// res.write(`${req.headers}`);
// res.end();
// }
// server.listen(7000,()=>console.log(`server listening on port 7000`))

// function handleRequest(req,res){
// res.statusCode = 202;
// res.end();
// }
// server.listen(3333,()=>{})

// function handleRequest(req,res){
// res.writeHead(202,{"Content-type":'text/html'});
// res.write(`<h3>Welcome to altcampus</h3>`);
// res.end();
// }
// server.listen(8000,()=>{})

// function handleRequest(req,res){
//     res.writeHead(202,{"Content-type":'application/json'});
//     res.write(`{success: true, message: 'Welcome to Nodejs'}`);
//     res.end();
//     }
//     server.listen(8888,()=>{})

// function handleRequest(req,res){
//    console.log(req.method);
// res.setHeader("Content-type",'text/html');
// res.write(`<h2>posted for first time</h2>`);
// res.end();
// }
// server.listen(5050,()=>{})

// function handleRequest(req,res){
//    if(req.method == "GET" && req.url == "/"){
//     res.end("Himanshu");
//    }
//    else if(req.method == "GET" && req.url == "/about"){
//     res.setHeader("Content-type",'text/html');
//     res.end("<h2>Himanshu</h2>");
//    }
//    else 
//    res.statusCode = 404;
//    res.end();
//  }
//  server.listen(2345,(err,content)=>{
//  })

// function handleRequest(req,res){
//    if(req.method == "GET" && req.url == "/users"){
//        fs.readFile("./node.html",(err,content)=>{
//         res.end(content);
//        })
    
//    }
//    else if(req.method == "POST" && req.url == "/users"){
//     res.end("Posted for the second time");
//    }
//  }
//  server.listen(2222,()=>{})

function handleRequest(req,res){
     let parsedUrl = url.parse("/users?email=nodeserver@gmail.com")
     console.log(parsedUrl.pathname);
     req.url
     console.log(parsedUrl.query);
     res.writeHead(202,{"Content-type":'application/json'});
    res.write(parsedUrl.query);
    res.end();
  }
server.listen(1111,()=>{})



