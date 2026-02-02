const { model } = require('mongoose');
const Tickets =require('../models/Tickets');
const Users = require('../models/Users');


const AddTickets=async (req,res)=>{

    try{

        if(req.user.role !== 'client'){
            return res.status(403).json({
                message:'Only Client can add Tickets'
            })
        }

        const tickets=await Tickets.create({
        client:req.user.id,
        title:req.body.title,
        description:req.body.description,
        });

        res.status(201).json({tickets})

    }catch(e){
        res.status(500).json({message:e.message})
    }
    

}

const getTickets=async(req,res)=>{
        try{
            if(req.user.role !== 'client'){
            return res.status(403).json({
                message:'only client can see Tickets'
            })
        }

        const tickets= await Tickets.find({
            client:req.user.id
        })
        
        res.status(200).json({tickets})
        }catch(e){
            res.status(500).json({message:e.message})
        }
        
        

}
module.exports={AddTickets,getTickets}