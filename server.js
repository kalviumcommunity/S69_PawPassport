const express = require("express");
const mongoose = require("mongoose");
const app = express();
require('dotenv').config();
let a = false;
mongoose.connect(process.env.db_url)
.then(() => {console.log("Connected to DataBase"); a = true})
.catch((err) => console.log(`Error while connecting ${err}`));



app.get("/",(req,res)=>{
    // res.send("Hello, welcome to my ASAP Project");
    if(a){
        res.send("Connected to DataBase")
    }else{
        res.send(`Error while connecting `)
    }
})

app.get("/ping",(req,res)=>{
    res.send("Pong");
})

app.listen(5000,()=>{
    console.log("Server is running on port 5000");
})

