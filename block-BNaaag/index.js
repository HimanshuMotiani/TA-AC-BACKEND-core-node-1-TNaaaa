var {readFile, readFileSync} = require(`fs`);
var val = readFileSync("./content.md",(error,content)=>console.log(error,content))
console.log(val)
var val1 = readFile("./content.md",(error,content)=>console.log(error,content))
console.log(val1)
let bff = Buffer.alloc(10);
bff.write("Hellooo Himanshu")
console.log(bff)