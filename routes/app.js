var express = require('express');
var router = express.Router();

var Department = require('../models/department');

router.get('/', function(req, res, next) {
    res.render('index');
});

// Draft for check data savings in MongoDB
router.get('/departments', function(req, res, next) {
    res.render('departments');
});

router.post('/add/department', function(req, res, next) {
    var department = req.body.department;
    var dep = new Department({
        title: department
    }).save();

    res.redirect('/departments');
});

module.exports = router;
