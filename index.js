
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const PORT = process.env.PORT || 3000

express()
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'vash')
    .use(morgan('dev'))
    .use(express.urlencoded({ extended: false }))
    .use(express.json())
    .use('/', require('./routes/index'))
    .use('/api/students/')
    .use('/bootstrap', express.static(path.join(__dirname, '/node_modules/bootstrap/dist')))
    .use('/jquery', express.static(path.join(__dirname, '/node_modules/jquery/dist')))
    .listen(PORT, ()=> console.log(`Server is running on http://localhost:${PORT}`))        
    