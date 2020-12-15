const express = require("express");
var app = express();

app.listen(3000, ()=>{console.log("Listening on port 3000")});

app.get("/", (req, resp) => {resp.send("Users Shown");});

app.get("/delete", (req, resp) => {resp.send("Delete User");});

app.get("/update", (request,response) => {response.send("Update User");});

app.get("/inser", (rq,rp) => {rp.send("Insert User");});

