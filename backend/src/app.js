const express =require('express');
const cors =require('cors');
const authRouter=require('./routes/authRouter')
const tickets=require('./routes/ticketsRouter')

const app =express();
app.use(cors());
app.use(express.json());


app.use("/api/auth",authRouter)
app.use("/api/tickets",tickets)

app.get('/',(req,res)=>{
    res.send('backend is running');
})

module.exports =app;