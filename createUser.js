const express = require('express')
const request = require('request')
var index = require('./index') 
const app = express()
const port = process.env.PORT || 4001

console.log(index.access_token)

app.listen(port, function () {
    console.log("Rodando na porta: ", port)
})




