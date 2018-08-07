const express = require('express')
const request = require('request')
const app = express()
const port = process.env.PORT || 4000


var options = {
    method: 'POST',
    rejectUnauthorized: false,
    url: 'https://ccadmin-z9pa.oracleoutsourcing.com/ccadmin/v1/mfalogin',
    headers:
    { 'Content-Type': 'application/x-www-form-urlencoded' },
    form:
    {
        grant_type: 'password',
        username: 'ricardo.heinz@compasso.com.br',
        password: 'C0nnect321',
        totp_code: '123456'
    }
};


request(options, function (error, response, body) {
    if (error) throw new Error(error);
    console.log(body);
});


app.listen(port, function () {
    console.log("Rodando na porta: ", port)
})


