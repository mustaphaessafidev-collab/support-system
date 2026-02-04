const Tickets = require("../models/Tickets")


const addTickets=async(req,res)=>{
    try{

        if(req.user.role !== 'client'){
            return res.status(403).json({
                message:'Only Clients can Add Tickets'
            })
        }
        const tickets = await Tickets.create({
            client:req.user.id,
            title:req.body.title,
            description:req.body.description,
        });

        res.status(201).json({tickets})


    }catch(error){
        res.status(500).json({message:e.message})
    }
}

module.exports={addTickets}