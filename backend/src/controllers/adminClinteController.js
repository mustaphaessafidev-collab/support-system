const Users = require("../models/Users")

const getClintes=async(req,res)=>{
    try{
        const client =await Users.find({role:'client'}).select("-password")
        res.json({client})
    }catch(e){
        res.status(500).json({message:'Clinet is not All'})
    }
}
const deleteClients=async(req,res)=>{
    try{
        const {id}=req.params

    const Client = await Users.findByIdAndDelete(id)

    if(!Client){
        res.status(404).json({message:'client is not delete'})
    }
    res.status(200).json({meesage:'client is delete good'})
    }catch(e){
        res.status(500).json({message:'error in delete clirnt ',e})
    }
    
}
module.exports ={getClintes,deleteClients};