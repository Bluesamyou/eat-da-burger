const express = require('express')
var router = express.Router();
var burgerFunctions = require("../models/burger");

router.get('/', function (req, res) {
    burgerFunctions.getAll()
        .then(function (data) {
            res.status(200).render("index", { burgers: data })
        })
        .catch(function (err) {
            res.status(500).end()
        })
})

router.post('/api/addBurger', function (req, res) {
    burgerFunctions.addBurger(req.body)
        .then(function (data) { res.status(200).end() })
        .catch(function (err) { res.status(500).end() })
})
module.exports = router