const express =require('express')
const  {AddAgentgs,getAgent, DeteleAgent}  = require('../controllers/adminAgantsController')
const protect = require('../middlewares/authMiddleware');
const isAdmin = require('../middlewares/adminMiddleware');
const { getClintes, deleteClients } = require('../controllers/adminClinteController');



const router=express.Router();

router.post('/addAgent',protect,isAdmin,AddAgentgs)
router.get('/getAgent',protect,isAdmin,getAgent)

router.delete("/Agent/:id",protect,isAdmin,DeteleAgent)

router.get('/getClient',protect,isAdmin,getClintes)
router.delete('/deleteClients/:id',protect,isAdmin,deleteClients)

module.exports=router;