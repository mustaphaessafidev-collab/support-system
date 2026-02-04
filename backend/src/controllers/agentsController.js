const Tickets = require("../models/Tickets")

const getAllTickets =async(req,res)=>{

    try{

         

        const tickets = await Tickets.find()

        res.status(200).json({tickets})

    }catch(e){
        res.status(500).json({message:'error in get tickets Agents',e})
    }
    

}
module.exports=getAllTickets