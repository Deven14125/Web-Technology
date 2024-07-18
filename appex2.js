const express= require("express");
const app = express()
const port = 2140;
    app.get('/about',(req,res)=>{x``
        res.send("Hello World From About Express");
    })
    app.get('/contact',(req,res)=>{
        res.send("Hello World From contact Express");
    })
    app.get('/home',(req,res)=>{
        res.send("Hello World From home Express");
    })
    app.get('/support',(req,res)=>{
        res.send("Hello World From support Express");
    })
    app.get('/help',(req,res)=>{
        res.send("Hello World From Help Express");
    })

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})