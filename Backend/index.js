// importing
var express = require("express")
var cors = require("cors")
require("./connection")
var empModel=require("./model/employee")
// initializing
var app=express()

// middleware
app.use(express.json());
app.use(cors());

// api
// add employee
app.post("/add",async(req,res)=>{
   try{
    await empModel(req.body).save();
    res.send({message:"Data added!"});
   }
   catch(error){
        console.log(error);
   }
})

// API VIEW
app.get("/view",async(req,res)=>{
    try{
        var data = await empModel.find()
        res.send(data)
    }catch(error){
        console.log(error);
    }
})
// api delete
app.delete("/remove/:id",async(req,res)=>{
    try{
        var id = req.params.id
        await empModel.findByIdAndDelete(id)
        res.send({message:"deteled sucessfully!!"})
    }catch(error){
        console.log(error);
    }
})
// update
app.put("/update/:id",async(req,res)=>{
    try{
        await empModel.findByIdAndUpdate(req.params.id,req.body)
        res.send({message:"updated sucessfully!!"})
    }catch(error){
        console.log(error);
    }
})
// port
app.listen(3006,()=>{
    console.log("port is up")
})
