'use strict'

var express = require('express')
var bodyParser = require('body-parser')
var fs = require('fs')
var app = express()

app.set('view engine', 'ejs')
app.set('views', 'view')

app.use(express.static('static'))
    .use(bodyParser.urlencoded({
        extended: true
    }))
    .use(bodyParser.json()) // Using body pareser to get the data from the forms
app.use('/image', express.static('static/upload'))

app.listen(8000)
console.log('Server is listening on port 8000')

app.get('/', index)

function index(req, res){
    res.render('index.ejs')
}