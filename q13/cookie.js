var cookieParser = require("cookie-parser");
var express =require("express");

var app = express();
app.use(cookieParser());

app.get("/",(req,res)=>{
    res.cookie("Name","Royden")
    res.send("cookie added")
})

app.get("/get",(req,res)=>{
    const Name = req.cookies.Name;

    if (username) {
      res.send(`Name: ${Name}`);
    } else {
      res.send('No username cookie found.');
    }
})

app.get("/clear",(req,res)=>{
    res.clearCookie("Name")
    res.send("cookie cleared")
})

app.listen(5000,()=>{
    console.log("running on port 5000")
})