const express =require('express');
const cors =require('cors');
const authRouter=require('./routes/authRouter')
const tickets=require('./routes/ticketsRouter')
const agent=require('./routes/adminRouter')
const message=require('./routes/messageRouter')
const app =express();
app.use(cors());
app.use(express.json());


app.use("/api/auth",authRouter)
app.use("/api/tickets",tickets)
app.use("/api/addAgents",agent)
app.use("/api/message",message)

app.use((req, res, next) => {
  req.io = req.app.get("io");
  next();
});
app.get('/',(req,res)=>{
    res.send('backend is running');
})

module.exports =app;