const isClient =(req,res,next)=>{
    if(req.user && req.user.role === 'client'){
        next();
    }else{
        res.status(403).json({
            message: 'Only clients can add tickets'
        });
    }
}
module.exports=isClient