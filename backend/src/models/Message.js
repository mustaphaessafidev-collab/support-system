const { default: mongoose } = require("mongoose");
const { sendMessage } = require("../controllers/messageController");

const messageSchema = new mongoose.Schema({
    ticket:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Tickets',
        required:true
    },
    sender:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    text:{
        type:String,
        required:true
    }
},{timestamps:true});


module.exports =mongoose.model('Message',messageSchema)