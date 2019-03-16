//данный роут отвечает за авторизацию или регестрацию пользователей
const express = require('express')
const controller = require('../controllers/auth')
const router = express.Router()

//Путь localhost:5000/api/auth/login
router.post('/login', controller.login)

//Путь localhost:5000/api/auth/register
router.post('/register', controller.register)


module.exports = router