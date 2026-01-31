import { json } from "express"
const Tickets = require("../models/Tickets")


const getAllTickes = async(req,res)=>{
    try{
        const tickets= await Tickets.find()
        res.json({tickets})

    }catch (e){
        res.status(500).json({message:'error in get all tickets Admin'})
    }
}