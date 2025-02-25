const express = require("express");
const app = express();
const route = require('./router.js');
const connect = require('./database.js')
const cors = require('cors')

app.use(cors())
app.use(express.json());

connect();

app.get("/",(req,res)=>{
    res.send("Hello, welcome to my ASAP Project");
    // if(a){
    //     res.send("Connected to DataBase")
    // }else{
    //     res.send(`Error while connecting `)
    // }
})

app.get("/ping",(req,res)=>{
    res.send("Pong");
})

app.use('/api/users',route);


app.listen(5000,()=>{
    console.log("Server is running on port 5000");
})


