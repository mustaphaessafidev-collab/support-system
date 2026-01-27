const express =require('express')
const { AddTickets } = require('../controllers/ticketsController')



const router =express.Router();

router.post('/addtickets',AddTickets)

module.exports=router