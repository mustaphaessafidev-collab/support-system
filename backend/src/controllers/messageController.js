const Message = require("../models/Message")



const sendMessage =async(req,res)=>{

    try{
        const message =await Message.create({
            ticket:req.body.ticket,
            sender:req.user.id,
            text:req.body.text
        })
        res.status(200).json({message})
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

const getMessage=async(req,res)=>{
    try{
        const message= await Message.find({
            ticket:req.params.id
        }).populate('sender','name role')
        
        res.status(200).json({message})

    }catch(error){
        res.status(500).json({message:error.message})
    }
}

module.exports={sendMessage,getMessage}