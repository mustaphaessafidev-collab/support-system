const express =require('express')
const  {AddAgentgs,getAgent}  = require('../controllers/adminAddAgantsController')
const protect = require('../middlewares/authMiddleware');
const isAdmin = require('../middlewares/adminMiddleware');



const router=express.Router();

router.post('/addAgent',protect,isAdmin,AddAgentgs)
router.get('/getAgent',protect,isAdmin,getAgent)
module.exports=router;