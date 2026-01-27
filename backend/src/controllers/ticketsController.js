const { model } = require('mongoose');
const Tickets =require('../models/Tickets')


const AddTickets=async (req,res)=>{

    try{

        const tickets=await Tickets.create({
        user:req.body.id,
        title:req.body.title,
        description:req.body.description,
        });

        res.status(201).json({tickets})

    }catch(e){
        res.status(500).json({message:e.message})
    }
    

}
module.exports={AddTickets}