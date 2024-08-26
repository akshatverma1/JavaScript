//For using express
const express = require("express");
const app = express();
const port = 3;
//

//id generator
const { v4: uuidv4 } = require('uuid');
//

//For using EJS
const path = require("path");
app.set("View engine","ejs");
app.set("views",path.join(__dirname,"/views"));
//


post = [
    {
        id :uuidv4(),
        username : "akshat",
        content : "Akshat is a Green Flag Boy."
    }
    ,{
        id :uuidv4(),
        username : "computer",
        content : "Computer is a very smart Machine."
    }
    ,{
        id :uuidv4(),
        username : "onkaam",
        content : "onkaam is a billion dollor company own by Akshat Verma."
    }
];


app.listen(port,()=>{
    console.log("Server is Working Condition");
});

app.get("/",(req,res)=>{
    res.render("main.ejs",{post});
});

app.get("/new",(req,res)=>{
    res.render("new.ejs");
    // res.send("New Post Page"); 
});