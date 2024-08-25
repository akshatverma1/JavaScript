// module.exports = "52375";
const express = require("express");
const app = express();

let port = 3;

app.listen(port ,()=>{
    console.log("this is first web server");
});

// app.use((req,res)=>{
//     console.log("request received");
//     res.send("akshat");
// });

app.get("/apple",(req,res)=>{
    console.log(req.params);
    res.send("akshata pallljfhgvvkufvbihr");
})

app.get("*",(req,res)=>{
    res.send("akshata pallljfhgvvkufvbihr");
})
app.get("/ig/:username",(req,res)=>{
    let {username} = req.params;
    res.send(`${username}`);
})