
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

const getAllTickes=async(req,res)=>{
    try{
        const tickets = await Tickets.find({})
        res.status(201).json({tickets})
    }catch(error){
        res.sttatus(500).json({meesage:error.meesage})
    }
}

const getTcketsByAgents=async(req,res)=>{
    try{
        const tickets= await Tickets.find({
            status:'open',
            agent:null
        })

        res.status(200).json({tickets})
    }catch(error){
        res.status(500).json({message:error.meesage})
    }       
}

const TakingTicketsAgent =async(req,res)=>{
    try{
        const tickets=await Tickets.findOneAndUpdate(
            {_id:req.params.id,agent:null},
            {
            agent:req.user.id,
            status:'in progress'
            },
            {new:true}
        )
        if(!tickets){
            return res.status(400).json({message:'Tickets already taken'})
        }

        res.status(203).json({tickets})

    }catch(error){
        res.status(500).json({message:error.meesage})
    }
}

const getMyTicketsAgenten=async(req,res)=>{

    try{
        const tickets =await Tickets.find({
        agent:req.user.id
        }).populate('client','name email')
        if(!tickets){
            return res.status(400).json({message:'yuo dont hava any ticket'})
        }

        res.status(200).json({tickets})
    }catch(e){
        res.status(500).json({message:e.meesage})
    }
    
}

module.exports={addTickets,getMyTickets,getAllTickes,getTcketsByAgents,TakingTicketsAgent,getMyTicketsAgenten}