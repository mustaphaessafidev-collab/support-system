const mongoose= require('mongoose')
const dotenv=require('dotenv')
const bcrypt=require('bcryptjs')

const User =require('../models/Users')

dotenv.config();

const Mongourl=process.env.MONGO_URI;

const seedAdmin =async ()=>{
    try{
        await mongoose.connect(Mongourl);

        const adminifexists=await User.findOne({role:'admin'})

        if(adminifexists){
            console.log('Admin already exists');
            process.exit();

        }

        const hashedPassword=await bcrypt.hash('admin123',10);

        await User.create({
            name:'Super Admin',
            email:'admin@gmail.com',
            password:hashedPassword,
            role:'admin'
        })

        console.log("Admin account creacted successfully");
        process.exit();



    }catch(e){
        console.log(e)
        process.exit(1);
    }
}

seedAdmin();