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


// ******************** read data from the database start******

app.get('/students',async(req,res)=>{
    try {
        const studentData= await student.find();
        console.log(studentData)
        res.send(studentData);
    } catch (error) {
        res.send(error);
    }
})
// ******************** read data from the database end******

//***********************/ get the individual data by id start

app.get('/students/:id',async(req,res)=>{
    try {
        const _id = req.params.id;
        const studentData = await student.findById(_id);
        console.log(studentData);

        if(!studentData)
        {
            return res.status(404).send();
        }
        else{
           res.send(studentData);
        }
    } catch (error) {
        res.status(500).send(error);
    }
})

//***********************/ get the individual data by id end

app.listen(port,()=>{
    console.log(`listening to the port no ${port}`);
})