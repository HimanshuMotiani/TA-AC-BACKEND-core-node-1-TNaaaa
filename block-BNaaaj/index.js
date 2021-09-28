var os = require("os")
var {readFile,unlink} = require("fs");

console.log('Welcome to Nodejs');

console.log(os.freemem());
console.log(os.cpus().length);
console.log(os.version());
console.log(os.uptime())


let bff1 = Buffer.alloc(12)
let bff2 = Buffer.allocUnsafe(12)
bff1.write("Welcome to dharamshal");
bff2.write("Welcome to dharamshala")
console.log(bff1.toString())
console.log(bff2.toString())