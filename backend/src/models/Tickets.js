const mongoose=require('mongoose');

const ticketsSchema=new mongoose.Schema({
    
    client:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    agent:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        default:null
    },
    status:{
        type:String,
        enum:['open','in progress','closed'],
        default:'open'
    },
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String, 
        required:true,
    },
    image:{
        type:String,
    }

    
})

module.exports=mongoose.model('Tickets',ticketsSchema)