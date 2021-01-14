const http = require('http');
const url = require('url');
const db = require('./connect-db');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

//connetto il database
db.initialize('127.0.0.1', 'root', '', 'chatnode');

app.post('/', (req,res)=>{
    res.writeHead(200, {'Access-Control-Allow-Origin' : '*', 'content-type' : 'application/json'});
    let sql = "INSERT INTO chat (message, sender) VALUES ('" + req.body.message + "','" + req.body.sender +"')";

    db.query(sql, (err)=>{
        if(err)
            throw err;
        res.send();
    })
});

app.get('/', (req, res)=>{
    res.writeHead(200, {'Access-Control-Allow-Origin' : '*', 'content-type' : 'application/json'});//application/json
    let q = url.parse(req.url, true);
    let data = q.query;
    db.query('SELECT * FROM chat WHERE id > ' + data.id, (err, data) =>{
        if(err)
            return console.error(err);
        //console.log(JSON.stringify(data));
        res.end(JSON.stringify(data));
    })
})

app.listen(8080);