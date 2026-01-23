const express =require('express');
const cors =require('cors');
const authRouter=require('./routes/authRouter')

const app =express();
app.use(express.json());
app.use("/api/auth",authRouter)
app.get('/',(req,res)=>{
    res.send('backend is running');
})

module.exports =app;