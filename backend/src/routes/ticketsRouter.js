const express =require('express')

const protect = require('../middlewares/authMiddleware');
const { AddTickets, getTickets } = require('../controllers/clientsTicketsController');
const isClient = require('../middlewares/isClientMiddleware');
const { route } = require('./agentRouter');
const { addTickets } = require('../controllers/ticketController');



const router =express.Router();
// only client he can add tickets
router.post('/',protect,isClient,addTickets)


module.exports=router