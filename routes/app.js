var express = require('express');
var router = express.Router();

var Department = require('../models/department');

router.get('/', (req, res, next) => {
    res.render('index');
});

// Draft for check data savings in MongoDB
router.get('/departments', (req, res, next) => {
    // Get all Departments
    var depNames= [];
    Department.find({}, (err, docs) => {
        if (err) {
            return res.send('Error! ');
        }
        console.log(docs);
        docs.forEach((item, index, arr) => {
            console.log(item.title);
            depNames.push(item.title);
        });
        console.log(depNames);
        // SEND data to hbs template
        res.render('departments', {departments: depNames});
    })
    
});

router.post('/add/department', (req, res, next) => {
    var department = req.body.department;
    var dep = new Department({
        title: department
    }).save();

    res.redirect('/departments');
});

module.exports = router;
