const mongoose =require('mongoose');

mongoose.connect("mongodb+srv://birnalepavan:12345@cluster0.yj2hdzw.mongodb.net/REST-APIretryWrites=true&w=majority").then(()=>{
    console.log("connection is successful");
}).catch((e)=>{
console.log(`${e}: NO connection establish`);
})