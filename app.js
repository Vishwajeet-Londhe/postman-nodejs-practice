// postman options check

// const express = require('express');
// const app = express();

// app.get('/checkAPI', function(req, res){
//     res.send('Hello API get method');
// })

// app.post('/checkAPI', function(req, res){
//     res.send('Hello API post method');
// })

// app.put('/checkAPI', function(req, res){
//     res.send('Hello API put method');
// })

// app.patch('/checkAPI', function(req, res){
//     res.send('Hello API patch method');
// })

// app.delete('/checkAPI', function(req, res){
//     res.send('Hello API delete method');
// })

// app.head('/checkAPI', function(req, res){
//     res.send('Hello API head method');
// })

// app.listen(3000);





// error handling

// const express = require("express");
// const app = express();

// app.get("/", function(req, res, next){
//     try{
//         res.send(hey);    
//     }
//     catch(err){
//         next(err);
//     }
// })

// app.get("/error", function(req, res){
//     res.send("low level error");
// })

// //error handler

// app.use((err,req, res, next) => {
//     res.status(500).send(err.message);
// })

// app.listen(3000);





//postman with routes

const express = require("express");
const app = express();

var data = [14,15,16,17,18,19,20,21,22];

app.get("/", function(req, res){
    res.send("hello")
})

app.get("/data",function(req, res){
    res.send(data)
})

app.post("/data/:number",function(req, res){
    res.send("chal raha hai")
})

app.listen(3000);