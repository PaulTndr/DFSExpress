const http = require('http')

var fs = require('fs')

var express = require('express')
var app = express()

app.set('view engine', 'ejs')

app.use("/static", express.static(__dirname + '/assets'))

app.get('/', (request, response) => {
    response.render("index")
})

app.get('/contact', (request, response) => {
    response.render("contact")
})

app.use(function (req, res, next) {
    console.log('comme un 404');
    res.status(404).render("404")
})

app.listen(3000);
console.log("c'est parti")