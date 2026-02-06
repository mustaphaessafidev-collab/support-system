const express =require('express');
const { sendMessage, getMessage } = require('../controllers/messageController');
const protect = require('../middlewares/authMiddleware');


const router =express.Router();

router.post('/',protect,sendMessage)

router.get('/:id',protect,getMessage)
module.exports=router