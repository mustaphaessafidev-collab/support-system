const express =require('express')

const protect = require('../middlewares/authMiddleware');
const { AddTickets } = require('../controllers/clientsTicketsController');
const isClient = require('../middlewares/isClientMiddleware');



const router =express.Router();
router.post('/addtickets',protect,AddTickets)

module.exports=router