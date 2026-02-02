const express =require('express')

const protect = require('../middlewares/authMiddleware');
const { AddTickets, getTickets } = require('../controllers/clientsTicketsController');
const isClient = require('../middlewares/isClientMiddleware');



const router =express.Router();
router.post('/addtickets',protect,AddTickets)
router.get('/getatickets',protect,getTickets)
module.exports=router