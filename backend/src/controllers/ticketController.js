const Tickets = require("../models/Tickets")


const addTickets=async(req,res)=>{
    try{

        const tickets = await Tickets.create({
            client:req.user.id,
            title:req.body.title,
            description:req.body.description,
        });

        res.status(201).json({tickets})


    }catch(error){
        res.status(500).json({message:error.message})
    }
}

const getMyTickets=async(req,res)=>{
    try{

    
    

    const tickets= await Tickets.find({
        client:req.user.id
    })

    res.status(201).json({tickets})     
    }catch(error){
        res.status(500).json({message:error.message})
    }


}

module.exports={addTickets,getMyTickets}