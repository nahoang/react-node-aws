const express = require('express')

const router = express.Router()

//import validators
const { userRegisterValidator } = require('../validators/auth');
const { runValidation } = require('../validators/index');


// import from controller

const {register} = require('../controllers/auth');

router.post('/register', userRegisterValidator, runValidation, register);

module.exports = router;