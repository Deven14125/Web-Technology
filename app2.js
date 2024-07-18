const { read, readFile, readFileSync } = require("fs");
const http = require("http");
server = http.createServer((req,res)=>{
    if (req.url === '/about') {
        let data = readFileSync('./about.txt');
        res.end(data.toString());
    }
    else if (req.url === '/contact') {
        let data = readFileSync('./contact.txt');
        res.end(data.toString());
    }
    else{
        res.end("Hello World!");
    }
});

const port = 2120;
server.listen(port,()=>{
    console.log(`server is listening port ${port}`);
});