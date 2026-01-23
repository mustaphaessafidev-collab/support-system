const User =require('../models/Users');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');

const JWT_SECRET=process.env.JWT_SECRET

const register =async (req,res)=>{
    try{
        const {name,email,password}=req.body;
        const ismath =await User.findOne({email});
        if(!name|| !email || !password){
            return res.status(400).json({message:"all input are required"})
        }
        if(ismath){
            return  res.status(401).json({message:"Email deje utilise"})

        }
        const hashedPassword= await bcrypt.hash(password,10)

        const newUser = new User({name,email,password:hashedPassword});
        await newUser.save();

        res.status(201).json({message:'user is creat good'})


    }catch(e){
        res.status(500).json({e:"server in not work in regiserter "})
    }
}

const login =async (req,res)=>{
    try{
        const {email,password}=req.body;

        const user =await User.findOne({email}).select('+password');

        if (!user){
            return res.status(401).json({message:'Invalid email or password'})
        }

        const ismatch =await bcrypt.compare(password,user.password);
        if(!ismatch){
            return res.status(403).json({message:'Invalid email or password'})
        }
        
        if(user.status === 'blocked'){
            return res.status(403).json({
                message:"Your account is disabled. Contact admin."
            })
        }

        const token =jwt.sign(
            {
                userId: user._id,
                role:user.role
            },
            process.env.JWT_SECRET,
            { expiresIn:'1d'}
        );

        res.json({
            token,
            user:{
                id: user._id,
                name:user.name,
                email:user.email,
                role:user.role,
            },
        });

    } catch (e){
        res.status(500).json({e:'server in not good lgoin '})
    }
}

module.exports={register,login}