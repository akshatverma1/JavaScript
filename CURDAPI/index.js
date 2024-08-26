const express = require("express");
const app = express();

const port =3;

app.listen(port,()=>{
    console.log("Server is Working Condition");
})

app.get("/",(req,res)=>{
    res.send("Akshat");
    console.log("console");
})