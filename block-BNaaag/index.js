var {readFile, readFileSync} = require('fs');
readFile("./content.md",'utf8',(error,content)=>console.log(error,content)) //asynchronous

var result = readFileSync("./content.md",'utf8')
console.log(result)

let bff = Buffer.alloc(10);
bff.write("Hellooo Himanshu")
console.log(bff.toString())