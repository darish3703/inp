var express =require("express");
var app = express();

app.get("/",(req,res)=>{
    res.cookie("Name","Royden")
    res.send("cookie added")
})

app.get("/clear",(req,res)=>{
    res.clearCookie("Name")
    res.send("cookie cleared")
})

app.listen(5000,()=>{
    console.log("running on port 5000")
})