var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
//module.exports allows us to expose an export to the taskModel var
var taskModel = require('../models/Tasks');

//populate the database with fun stuff
//CREATE (out of CRUD)
// dataObject == req.body
var dataObject = {
  name: 'Buy Orange juice',
  completed: false,
  description: 'Go to tony\'s and buy OJ'
}

//funtion(error, task) - returns an error from mongo

// taskModel.create(dataObject, function(error, task) {
//     if (error) return error;
//     console.log("A document object has been created: ");
//     console.log(task);
//
// });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//GET ALL
// send all database objects to api call
router.get('/api', function(req, res, next){
  // return an error or all of the tasks from the database
  taskModel.find(function(error, tasks) {
    if (error) return error;
    res.send(tasks);

  })
  //GET BY ID
  router.get('/api/:id', function(req, res, next) {
    taskModel.findById(req.params.id, function(error, task) {
        if (error) return error;
        res.json(task);

    });

  });

// CREATE
router.post('/api', function(req, res, next) {
  taskModel.create(req.body, function(error, task) {
    if (error) return error;
    console.log(" A document object has been created")
    console.log(task)



  })


})



});

module.exports = router;
