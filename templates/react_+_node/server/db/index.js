const mongoose = require('mongoose');

module.exports = dbName => {
  // Connecting To Mongodb
  mongoose.connect(
    `mongodb://localhost/${dbName}`,
    { useNewUrlParser: true },
    err => {
      if (err) throw err;
      console.log(`Connected to database: ${dbName}`);
    }
  );
};
