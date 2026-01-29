const express =require('express')
const  AddAgentgs  = require('../controllers/adminAddAgantsController')
const protect = require('../middlewares/authMiddleware');



const router=express.Router();

router.post('/addAgent',protect,AddAgentgs)

module.exports=router;