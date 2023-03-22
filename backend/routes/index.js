const express = require('express')
const { handleSaveUser, handleSendData } = require('../controller/Users')


const router = express.Router()
exports.handleCreatUser=router.post('/user',handleSaveUser)
exports.handleSendDataFromDb=router.get('/user',handleSendData)
