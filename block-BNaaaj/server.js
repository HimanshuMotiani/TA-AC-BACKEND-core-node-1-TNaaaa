let url = require("url")
let parsedUrl = url.parse("https://airindia.com/fares/calculate?from=delhi&to=detroit")
console.log(parsedUrl)
console.log(parsedUrl.query)
console.log(parsedUrl.protocol)
console.log(parsedUrl.pathname);
console.log(url.parse(parsedUrl.query))