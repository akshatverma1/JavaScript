//For using express
const express = require("express");
const app = express();
const port = 3;
//

//id generator
const { v4: uuidv4 } = require('uuid');
//
let bodyParser = require('body-parser');
app.use(bodyParser.json());
var urlencodedParser = bodyParser.urlencoded({ extended: false });
//For using EJS
const path = require("path");

app.set("View engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.set(express.static(path.join(__dirname,"public")));
//
//For Post Request
app.use(express.urlencoded({extended:true}));
app.use(express.json());

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

//server start
app.listen(port,()=>{
    console.log("Server is Working Condition");
});
//

//see all posts
app.get("/",(req,res)=>{
    res.render("main.ejs",{post});
});
//

//making new post
app.get("/new",(req,res)=>{
    res.render("new.ejs");
});
app.post("/new",(req,res)=>{
    let {username,content} = req.body;
    let id = uuidv4();
    post.push({id,username,content});
    console.log(username);
    res.redirect("http://localhost:3/");
});
//



//for paricular open post
app.get("/open/:id",(req,res)=>{
    let {id} = req.params;
    console.log(id);
    let posts = post.find((p) => id===p.id); 
    res.render("open.ejs",{posts});
});
//

//For Update
app.patch("/update/:id",(req,res)=>{
    let {id} = req.params;
    let newcontent = req.body;
    let posts = post.find((p) => id===p.id);
    posts.content = newcontent;
    console.log(posts.content);
    res.send("patch request accept");
})



app.get("/update/:id",(req,res)=>{
    let {id} = req.params;
    let newcontent = req.body.content;
    let posts = post.find((p) => id===p.id); 
    res.render("update.ejs",{posts});
})