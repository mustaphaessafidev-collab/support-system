const mongoose=require('mongoose');

const ticketsSchema=new mongoose.Schema({
    
    ClientId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        require:true
    },
    agent:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        default:null
    },
    status:{
        type:String,
        enum:['open','in progress','closed'],
        delete:'open'
    },
    title:{
        type:String,
        require:true,
    },
    description:{
        type:String, 
        require:true,
    },
    image:{
        type:String,
    }

    
})

module.exports=mongoose.model('Tickets',ticketsSchema)