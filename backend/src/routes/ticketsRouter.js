const express =require('express')

const protect = require('../middlewares/authMiddleware');
const isClient = require('../middlewares/isClientMiddleware');
const { route } = require('./agentRouter');
const { addTickets, getMyTickets, getAllTickes, getTcketsByAgents } = require('../controllers/ticketController');
const isAdmin = require('../middlewares/adminMiddleware');



const router =express.Router();
// only client he can add tickets
router.post('/',protect,isClient,addTickets)
// get tickets of clients jast
router.get('/my',protect,isClient,getMyTickets)
// get all tickets for Admin
router.get('/all',protect,isAdmin,getAllTickes)

router.get('/agent',protect,getTcketsByAgents)
module.exports=router