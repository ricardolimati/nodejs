const express = require('express');
const routes = express.Router();

routes.get("/", (req, res) => {
    // Product.create({
    //     Title: 'React Nativa',
    //     description: 'Build Native app with',
    //     url: 'https://github.com/facebook/react-native'
    // });
    return res.send("Ano Novo!");
});

module.exports = routes;
