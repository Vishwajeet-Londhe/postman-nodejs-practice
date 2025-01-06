const express = require('express');
const app = express();

app.get('/checkAPI', function(req, res){
    res.send('Hello API get method');
})

app.post('/checkAPI', function(req, res){
    res.send('Hello API post method');
})

app.put('/checkAPI', function(req, res){
    res.send('Hello API put method');
})

app.listen(3000);