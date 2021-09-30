var http = require("http")
var fs = require("fs");

var server = http.createServer(handleRequest)

function handleRequest(req, res) {
    if (req.method === 'GET' && req.url === '/' || req.url === '/index.html') {
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream(__dirname + '/index.html').pipe(res);
      } else if (req.method === 'GET' && req.url === '/about.html') {
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream(__dirname + req.url).pipe(res);
      } 
      else if (req.method === 'GET' && req.url === '/blog.html') {
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream(__dirname + req.url).pipe(res);
      } 
      else if (req.method === 'GET' && req.url === '/cases.html') {
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream(__dirname + req.url).pipe(res);
      } 
      else if (req.method === 'GET' && req.url === '/contact.html') {
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream(__dirname + req.url).pipe(res);
      } 
      else if (req.method === 'GET' && req.url === '/services.html') {
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream(__dirname + req.url).pipe(res);
      } 
      else if (req.url.split('.').pop() === 'css') {
        //   console.log( __dirname, , req.url);
        res.setHeader('Content-Type', 'text/css');
        fs.createReadStream(__dirname + req.url).pipe(res);
      } 
      else if (req.url.split('.').pop() === 'png' || req.url.split('.').pop() === 'jpg') {
        res.setHeader('Content-Type',`image/${req.url.split('.').pop()}`);
        console.log(__dirname,"    " ,req.url);
        fs.createReadStream(__dirname + req.url).pipe(res);
      }
      else{
          res.statusCode = 404;
          res.end('Page not found')
      }
}
server.listen(5000, () => { });