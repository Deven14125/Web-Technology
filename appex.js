const express = require("express");
const app = express();
const port = 2130;

app.get('/',(req, res) => {
  res.send("Hello World From Express");
});

app.listen(port,()=>{
    console.log(`App Is Listening From Port ${port}`);
});