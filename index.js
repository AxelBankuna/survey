const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

const port = process.env.PORT || 8000;
let uri = process.env.MONGODB_URI || "mongodb://localhost:27017/surveyDB";

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on("error", () => console.log("Database connection error."));
db.once("open", () => {
    console.log("Lifestyle-Survey Database connected successfully.");
});

//  ROUTES
const homeRoute = require("./routes/home");
const surveyRoute = require("./routes/survey");
const resultsRoute = require("./routes/results");


//  MIDDLEWARE
app.set("view engine", "ejs");
app.use(express.static('public'));


// parse application
app.use(bodyParser.urlencoded({ extended: false}));

app.use(bodyParser.json());


//  ROUTING
app.use('/', homeRoute);
app.use('/survey', surveyRoute);
app.use('/results', resultsRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
