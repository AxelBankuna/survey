const express = require("express");

const router = express.Router();

const survey = require("../models/Survey");

//  ROUTE TO GET READ AND DISPLAY DATA
router.get('/', (req, res, next) => {
   survey.find((err, docs) => {
   res.render("home", {surveys: docs});
   }).catch(err=>{
      console.log("Error!!! Unable to retrieve from database.");
   });
});

router.get('/survey', (req, res, next) => {
   survey.find((err, docs) => {
      res.render("survey", {surveys: docs});
   }).catch(err=>{
      console.log("Error!!! Unable to retrieve from database.");
   });
});

router.get('/results', (req, res, next) => {
   survey.find((err, docs) => {
      res.render("results", {surveys: docs});
   }).catch(err=>{
      console.log("Error!!! Unable to retrieve from database.");
   });
});

router.get('/about', (req, res, next) => {
   survey.find((err, docs) => {
      res.render("about", {surveys: docs});
   }).catch(err=>{
      console.log("Error!!! Unable to retrieve from database.");
   });
});


//  ROUTE TO CREATE
router.post('/add', (req, res, next) => {
   const surname = req.body.surname;
   const firstNames = req.body.firstNames;
   const contactNumber = req.body.contactNumber;
   const date = req.body.date;
   const age = parseInt(req.body.age);

   const pizza = req.body.pizza;
   const pasta = req.body.pasta;
   const pap = req.body.pap;
   const chicken = req.body.chicken;
   const beef = req.body.beef;
   const other = req.body.other;

   const eatOut = req.body.eatOut;
   const movies = req.body.movies;
   const tv = req.body.tv;
   const radio = req.body.radio;

   const food = [req.body.pizza, req.body.pasta, req.body.pap, req.body.chicken, req.body.beef, req.body.other];
   const hobbies = [parseInt(req.body.eatOut), req.body.movies, req.body.tv, req.body.radio];

   console.log(surname, firstNames, contactNumber, date, age, hobbies[0]);

   const newSurvey = new survey({
      surname,
      firstNames,
      contactNumber,
      date,
      age,
      pizza, pasta, pap, chicken, beef, other,
      eatOut, movies, tv, radio,
      food,
      hobbies
   });
   newSurvey.save((err)=> {
      if (err)
         console.log(err.message);
      else {
         console.log("Data saved successfully.");

         /****************************/

         // survey.findOne({ 'surname': 'Bukasa' }, 'name occupation', function (err, person) {
         //    if (err) return handleError(err);
         //    // Prints "Space Ghost is a talk show host".
         //    console.log('%s %s is a %s.', person.name.first, person.name.last,
         //        person.occupation);
         // });

         console.log(survey.aggregate([{$count: "total"}]));


         /****************************/

         res.redirect('/');
      }
   });
});

module.exports = router;
