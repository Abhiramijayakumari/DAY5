var mongoose = require('mongoose')
mongoose.connect("mongodb+srv://Abhirami:anjujaya4@cluster0.idqsrck.mongodb.net/Empdb?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("connected");
})
.catch((error)=>{
    console.log(error)
})