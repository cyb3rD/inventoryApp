var express = require('express');
var router = express.Router();

var Department = require('../models/department');

router.get('/', function(req, res, next) {
    res.render('index');
});

// Draft for check data savings in MongoDB
router.get('/departments', function(req, res, next) {
    // Get all Departments
    Department.find({}, function (err, docs) {
        if (err) {
            return res.send('Error! ');
        }
        var depName = 'Departments from Mongo in console';
        console.log(docs);
        // TODO:
        // Output in select all Departments from DB
        res.render('departments', {department: depName});
    })
    
});

router.post('/add/department', function(req, res, next) {
    var department = req.body.department;
    var dep = new Department({
        title: department
    }).save();

    res.redirect('/departments');
});

module.exports = router;
