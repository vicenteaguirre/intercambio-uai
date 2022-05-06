const mongoose = require('mongoose');
const URL = process.env.URL;
console.log(URL)

mongoose.connect(URL)

const db = mongoose.connection;
 
db.on('error', console.error.bind(console, 'Database connection error:'));
 
db.once('open', function() {
  console.log("Database connection Successful!");
});




