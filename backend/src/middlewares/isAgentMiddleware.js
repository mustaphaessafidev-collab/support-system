const isAgent =async(req,res,next)=>{
    if(req.user && req.user.role==="agent"){
        next();
    }else{
        res.status(403).json({message:'Agent acces only'})
    }
}
module.exports=isAgent