const mongoose = require('mongoose');
const { DB_URL } = require('./config');

mongoose.connect(DB_URL)

const db = mongoose.connection;
 
db.on('error', console.error.bind(console, 'Database connection error:'));
 
db.once('open', function() {
  console.log("Database connection Successful!");
});




