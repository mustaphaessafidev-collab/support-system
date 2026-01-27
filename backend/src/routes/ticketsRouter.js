const express =require('express')
const { AddTickets } = require('../controllers/ticketsController');
const protect = require('../middlewares/authMiddleware');



const router =express.Router();

router.post('/addtickets',protect,AddTickets)

module.exports=router