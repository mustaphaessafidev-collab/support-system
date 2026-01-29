const express =require('express')
const  AddAgentgs  = require('../controllers/adminAddAgantsController')
const protect = require('../middlewares/authMiddleware');
const isAdmin = require('../middlewares/adminMiddleware');



const router=express.Router();

router.post('/addAgent',protect,isAdmin,AddAgentgs)

module.exports=router;