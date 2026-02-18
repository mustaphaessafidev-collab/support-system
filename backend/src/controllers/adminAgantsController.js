const Users=require('../models/Users')
const bcrypt = require('bcryptjs');




const AddAgentgs= async(req,res)=>{
    try{

        const {name,email,password}=req.body

        if(!name || !email || !password){
            res.status(400).json({message:'all input is not good'})
        }

        const isemail=await Users.findOne({email})

        if(isemail){
            res.status(400).json({message:'email is real iset'})
        }

        const hadPassword =await bcrypt.hash(password,10)

        const agent =await Users.create({
            name,
            email,
            password:hadPassword,
            role:'agent'
        })

        res.status(201).json({
            id: agent._id,
            name: agent.name,
            email:agent.email,
            password:agent.password,
            role:agent.role
        })
    }catch (e){
        res.status(500).json({message:'function add agent is not work'})
    }
}
const getAgent= async(req,res)=>{

    try{
        const agent = await Users.find({role:'agent'}).select("-password")
        res.json({agent})
    }catch(e){
        res.status(500).json({message:'agent is not get all'})
    }


}
const DeteleAgent=async(req,res)=>{
    try{

        const { id }=req.params
        const Agent =await Users.findByIdAndDelete(id);

        if(!Agent){
            res.status(404).json({message:'agnet is not found'})
        }
        res.status(200).json({meesage:'agente is delete good'})
    }catch(e){
        res.status(500).json({message:'error in delete agent ',e})
    }
}

const manageUsers=async(req,res)=>{
    try{
        
        const {id}=req.params

        const user =await Users.findById(id)

        if(!user){
          return res.status(401).json({message:'error in blocked'})
        }
        let s
        if(user.status==='blocked') s='active'
            
        else if(user.status==='active')s='blocked'

        else {
            return res.status(400).json({ message: "Invalid user status" })
        }

        
        
        const users=await  Users.findByIdAndUpdate(
            id,{
                status:s
            }
            ,{new:true}
        )
        
        res.status(201).json(users)

    }catch(e){
        res.status(500).json({message:e.message})
    }
}


module.exports= {AddAgentgs,getAgent,DeteleAgent,manageUsers};