var http=require('http');
http.createServer((req,res)=>{
res.end("Hel--o");
}).listen(1231,()=>{console.log("Listening port: 1231")});