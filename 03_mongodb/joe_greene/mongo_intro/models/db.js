//we're going to use an ORM called Mongoose
var mongoose = require('mongoose');

// define my connection string!
// protocol://username:password@website.com:3000/resource-name
// ftp://admin:awesomepassword@ftp.somewebsite.com/path/to/www
// website: https://google.com/search

// mongodb://server-name.com:port/name-of-database
//no Migrations will make a db for yo
var connectionString = 'mongodb://localhost/myfirstdatabase';

// now tell mongoose to connect to out datbase using connectionString
mongoose.connect(connectionString);


// listen for events in mongoose
mongoose.connection.on('connected', function(){
  console.log('Mongoose has connected to: ' + connectionString);

});
mongoose.connection.on('erro', function(error){
  console.log('Mongoose has an error: ' + error);

});
mongoose.connection.on('disconnected', function(){
  console.log('Mongoose has been disconnected');

});
