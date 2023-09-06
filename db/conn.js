const mongoose =require('mongoose');

mongoose.connect("mongodb://0.0.0.0:27017/students-api").then(()=>{
    console.log("connection is successful");
}).catch((e)=>{
console.log(`${e}: NO connection establish`);
})