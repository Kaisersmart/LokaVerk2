
//N1 This line connects the dotenv library for reading the .env file
require('dotenv').config();

//Importing express and path modules, then creating the main express application
const express = require('express');
const path = require('path');
const app = express();

PORT = process.env.PORT || 3000;

//Connects to the charactersRouters file
const charactersRouter = require("./src/routes/charactersRouters");

// Sets up ejs for working with ejs files
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', charactersRouter);

app.get("/", (req, res) => {
    res.render("index", {
        title: "The lord of the rings"
    });
});

app.use('/', charactersRouter);

app.listen(PORT, ()=>{
    console.log(`Server kyrir á http://localhost:${PORT}`);
})


