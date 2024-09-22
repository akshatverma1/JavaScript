const express = require('express');
const app = express();
const { faker } = require('@faker-js/faker');
let port = 333;
const methodOverride = require("method-override");
const path = require("path");
const { v4: uuidv4 } = require('uuid');
app.use(express.urlencoded({ extended: true }));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"Public")));
app.use(methodOverride("_method"));
const mysql = require('mysql2');







app.listen(port,()=>{
    console.log(`Server is Started = ${port}`);
})

app.get("/",(req,res)=>{
    res.send("Server is Now Activated....");
})

app.get("/signup",(req,res)=>{
    res.render("signup.ejs");
})

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'login',
    password:"2424"
  });





// let data3 = [];


app.patch("/signup/id",(req,res)=>{
    let {name :u,email,mobile} = req.body;
    console.log(u);
    console.log(email);
    console.log(mobile);
    let queryy = `INSERT INTO signinfo VALUES("${uuidv4()}","${u}","${email}","${mobile}")`;
    connection.query(queryy,(err,result)=>{
        if(err) {
            console.log(err);
        }
        console.log(result);
    })
    res.render("login.ejs");
})

app.post("/loginn/ak",(req,res)=>{
    let {name :u,password} = req.body;
    let Usernamess = u;
    let pass = password;
    let queryy = `SELECT Id,Username,Email FROM signinfo WHERE Username ="${u}" AND mobile=${pass}`;
    connection.query(queryy,(err,result)=>{
        console.log(result);
        if(err){
            res.send("No Account is Found");
            console.log(err);
        }
        else{
            res.render("profile.ejs",{Usernamess,pass});
        }
    })
})