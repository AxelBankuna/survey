const express = require("express");

const router = express.Router();

router.get('/survey', (req, res, next) => {
    res.render("survey");
});

module.exports = router;
