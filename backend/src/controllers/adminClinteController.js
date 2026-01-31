const Users = require("../models/Users")

const getClintes=async(req,res)=>{
    try{
        const client =await Users.find({role:'client'}).select("-password")
        res.json({client})
    }catch(e){
        res.status(500).json({message:'Clinet is not All'})
    }
}
module.exports ={getClintes};