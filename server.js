const express = require('express');

const app = express();

app.get("/", (req, res)=>{
    res.send("Feliz Natal!");
})

app.listen(3001);