const appRootPath = require('app-root-path')

const { User } = require('./model/User');

const express = require('express')

const cors = require('cors');

const mongoose = require('mongoose');

const { handleSaveUser } = require('./controller/Users');

const server = express()

mongoose.set('strictQuery', false);

mongoose.connect('mongodb://127.0.0.1:27017/modal').then(res => {
    console.log('app conected')
});

server.use(cors())

server.use(express.json({
    extended: false
}))

require('dotenv').config({
    path: appRootPath + '/.env'
})

server.get('/user' , (req,res) => {
    res.status(201).json({
        massage: 'shod ',
    })
});

server.post('/user', handleSaveUser);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`server runnig at:${PORT}`))