const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        unique:true,
    },
    email:{
        type:String,
    },
    mobile:{
        type:String,
    },
    password:{
        type:String,
       
    },
})

module.exports=mongoose.model("users",userSchema);