const express = require('express')
const request = require('request')
const app = express()
const port = process.env.PORT || 4000


var algumaCoisa = require('./auth')

console.log(algumaCoisa.x)



app.listen(port, function () {
    console.log("Rodando na porta: ", port)
})


