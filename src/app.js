const express = require("express");
require("../db/conn")
const student = require("../models/student")
const app = express();
app.use(express.json())
const port = process.env.PORT || 3000;

// *******************using promises start

// 
// app.post('/students',(req,res)=>{
//     console.log(req.body);
//     const user = new student(req.body);
//     user.save().then(()=>{
//        res.status(201).send(user); 
//     }).catch((e)=>{
//         res.status(400).send(e);
//        console.log(`${e}: something went wrong`);
//     })
// })

// *******************using promises end

//*****************using async await start**********

app.post('/students',async(req,res)=>{
      try {
        console.log(req.body);
        const user = new student(req.body);
      const createUser = user.save();
      res.status(201).send(user);
      } catch (e) {
        res.status(400).send(e);
        console.log(`${e}: something went wrong`);
      }
})

//*****************using async await end**********


app.listen(port,()=>{
    console.log("listioning to the port no 3000");
})