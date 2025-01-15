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

// const express = require("express");
// const app = express();

// var data = [14,15,16,17,18,19,20,21,22];

// app.get("/", function(req, res){
//     res.send("hello")
// })

// app.get("/data/mob/male/akki",function(req, res){
//     res.send("ho gaya")
// })

// app.post("/data/:number",function(req, res){
//     data.push(parseInt(req.params.number));
//     res.send(data);
// })

// app.get("/no/:number",function(req, res){
//     data.push(parseInt(req.params.number));
//     res.send(data);
// })

// app.listen(3000);



//mongoDB Atlas
// const express = require('express');
// const app = express();
// const mongoose = require("mongoose");

// mongoose.connect("mongodb+srv://vishwajeetlondhe51:NBCnYofPysPjAMOz@cluster0.s7kis.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
// .then(function(){
//     console.log("connected to database");
// });

// app.get("/", function(req, res, next){
//     res.send("hell");
// });

// app.listen(3000);



//mongoDB crating user

// const express = require("express");
// const app = express();
// const mongooseconnection = require("./config/mongoose");
// const userModel = require("./models/user");

// app.get("/", function(req, res, next){
//     res.send("hello");
// });

// app.get("/create",async function(req, res, next){
//     let createuser = await userModel.create({
//         username: "vishwajeet_0104",
//         name: "vishwajeet",
//         email: "vishwajeet@gmail.com",
//         password: "abc123"
//     });
//     console.log("user created");
//     res.send(createuser);
// });

// app.get("/fav",async function(req, res, next){
//     let createuser = await userModel.create({
//         username: "fav123",
//         name: "manji",
//         email: "manji@gmail.com",
//         password: "abc123"
//     });
//     console.log("user created fav");
//     res.send(createuser);
// });

// app.listen(3000);


//reading data from one thing

// const express = require("express");
// const app = express();
// const mongooseconnection = require("./config/mongoose");
// const userModel = require("./models/user");

// app.get("/", function(req, res, next){
//     res.send("hello");
// });

// app.get("/read",async function(req, res, next){
//     let user  = await userModel.findOne({name:"vishwajeet"});
//     console.log("read data")
//     res.send(user);
// });

// app.listen(3000);



//reading data all data

// const express = require("express");
// const app = express();
// const mongooseconnection = require("./config/mongoose");
// const userModel = require("./models/user");

// app.get("/", function(req, res, next){
//     res.send("hello");
// });

// app.get("/read",async function(req, res, next){
//     let users  = await userModel.find();
//     console.log("read data")
//     res.send(users);
// });

// app.listen(3000);



//updating data in MongoDB

// const express = require("express");
// const app = express();
// const mongooseconnection = require("./config/mongoose");
// const userModel = require("./models/user");

// app.get("/", function(req, res, next){
//     res.send("hello");
// });

// app.get("/update",async function(req, res, next){
//     let user  = await userModel.findOneAndUpdate({name:"vishwajeet"},{name:"vishwajeet londhe"}, {new:true});
//     console.log("updated data")
//     res.send(user);
// });

// app.listen(3000);




//deleting data

// const express = require("express");
// const app = express();
// const mongooseconnection = require("./config/mongoose");
// const userModel = require("./models/user");

// app.get("/", function(req, res, next){
//     res.send("hello");
// });

// app.get("/delete",async function(req, res, next){
//     let user  = await userModel.findOneAndDelete({name:"manjiree"});
//     console.log("deleted data");
//     res.send(user);
// });

// app.listen(3000);



//postman data created on body

// const express = require("express");
// const app = express();
// const mongooseconnection = require('./config/mongoose');
// const userModel = require('./models/user');

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.get("/", function(req,res, next){
//     res.send("hello");
// })

// app.post("/create", function(req,res, next){
//     res.send(req.body);
// })

// app.listen(3000);




// postman user created

const express = require("express");
const app = express();
const mongooseconnection = require('./config/mongoose');
const userModel = require('./models/user');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function(req,res, next){
    res.send("hello");
})

app.post("/create",async function(req,res, next){
    let {name,username,email,password} = (req.body);

    let createduser = await userModel.create ({
        name,
        username,
        email,
        password,
    });

    res.send(createduser);
})

app.get("/read",async function(req,res, next){
    let users = await userModel.find();
    res.send(users);        
})

app.get("/read/:username",async function(req,res, next){
    let user = await userModel.findOne({username : req.params.username});
    res.send(user);        
})

app.get("/update/:username",async function(req,res, next){
    let {name, username, email} = req.body;
    let newuser = await userModel.findOneAndUpdate({username : req.params.username},{username, name, email}, {new: true});
    res.send(newuser);
})

app.listen(3000);