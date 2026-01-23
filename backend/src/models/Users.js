const mongoose =require('mongoose')

const userSchema=new mongoose.Schema(
{
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        select: false
    },
    role:{
        type:String,
        enum:['client','agent','admin'],
        default:'client'
    },
    status:{
        type:String,
        enum:['active','blocked'],
        default:'active'
    },
  

},
    {
        timestamps:true
    },
)
module.exports =mongoose.model('User',userSchema);