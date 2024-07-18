const http = require("http");
server = http.createServer((req,res)=>{
    res.end("Hello World");
});

const port = 2100;
server.listen(port,()=>{
    console.log(`server is listening port ${port}`);
});