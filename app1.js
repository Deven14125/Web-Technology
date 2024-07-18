const http = require("http");
server = http.createServer((req,res)=>{
    if (req.url === '/home') {
        res.end("Hello World From Home");
    }
    else if (req.url === '/about') {
        res.end("Hello World From About");
    }
    else if (req.url === '/contact') {
        res.end("Hello World From Contact");
    }
    else if (req.url === '/support') {
        res.end("Hello World From Support");
    }
    else if (req.url === '/help') {
        res.end("Hello World From Help");
    }
    else{
        res.end("Hello World");
    }
});

const port = 2110;
server.listen(port,()=>{
    console.log(`server is listening port ${port}`);
});