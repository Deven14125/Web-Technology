const express = require("express");
const app = express();
const port = 2150;

app.get("about", (req, res) => {
  let data = FileReader("./about1.txt");
  res.send(data.toString());
});

app.get("/contact", (req, res) => {
    let data = FileReader("./contact1.txt");
    res.send(data.toString());
});

app.listen(port, () => {
  console.log(`App Is Listening From Port ${port}`);
});
