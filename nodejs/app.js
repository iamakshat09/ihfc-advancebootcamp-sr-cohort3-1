const express=require("express");
const cors=require("cors")
const app=express();

app.use(express.json())
app.use(cors({orgin:"*"}))

app.get("/",function(req,res){
    let status="hi guys welcome to day4";
    res.json({status});
})

app.listen(3000,function(){
    console.log("server is running")
})