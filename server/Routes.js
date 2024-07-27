const express = require('express');
const router = express.Router();

//middlewares
const authController = require('./controller/authController')
const messageController = require("./controller/messageController")

//Authentication routes
router.post('/register', authController.Register)
router.post('/signin',authController.signIn)

//chatRoute


module.exports = router;
