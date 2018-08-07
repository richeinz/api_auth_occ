const express = require('express')
const request = require('request')
const app = express()
var exports = module.exports = {};
var toque = "";


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


var x = "";


request(options, function (error, response, body) {
    if (error) throw new Error(error);
    body = JSON.parse(body);
    this.x = body.access_token
    //console.log(x)

    //var chinelao = body.access_token
    
});

module.exports.x = x;







