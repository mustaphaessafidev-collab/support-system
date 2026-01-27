const jwt = require('jsonwebtoken');

const protect=(req,res,next)=>{
    let token;

    if(
        req.headers.authorization && 
        req.headers.authorization.startsWith('Bearer')
    ){
        try{
            token =req.headers.authorization.split(' ')[1];

            const decoded= jwt.verify(token, process.env.JWT_SECRET);
            req.user =decoded

            next();
        }catch (e){
        return res.status(404).json({message:'No authorized'})
        }
    } else{
        return res.status(401).json({message:'no token'})
    }
};

module.exports =protect