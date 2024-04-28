const jwt=require("jsonwebtoken");
const usermodel = require("../models/usermodel");
const maxage=3*24*60*60;
const createToken=(id)=>{
    return jwt.sign({id},"Sita Ram",{
        expiresIn:maxage,
    });
}
module.exports.register=async(req,res,next)=>{
    try{
        const {name,email,mobile,password}=req.body;
        const user=await usermodel.create({name,email,mobile,password});
        const token=createToken(user._id);
        res.cookie("jwt",token,{
            withCrediantials:true,
            httpOnly:false,
            maxAge:maxage*1000,
        });
        res.status(201).json({user:user._id,created:true})
    }catch(err){
        console.log(err);
    }
}

module.exports.login=async(req,res,next)=>{
    
}