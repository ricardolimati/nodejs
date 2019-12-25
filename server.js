const express = require('express');

const app = express();

app.get("/", (req, res)=>{
    res.send("Helo Ricardo!");
})

app.listen(3001);