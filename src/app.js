const express = require("express");
require("../db/conn")
const student = require("../models/student")
const app = express();
app.use(express.json())
const port = process.env.PORT || 3000;
// 
app.post('/students',(req,res)=>{
    console.log(req.body);
    const user = new student(req.body);
    user.save().then(()=>{
       res.status(201).send(user); 
    }).catch((e)=>{
        res.status(400).send(e);
       console.log(`${e}: something went wrong`);
    })
 
})



app.listen(port,()=>{
    console.log("listioning to the port no 3000");
})