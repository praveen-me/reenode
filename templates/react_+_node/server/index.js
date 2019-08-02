const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const initDB = require('./db/index');

const PORT = process.env.PORT || 3000;
const app = express();

app.use('/', express.static(path.join(__dirname, './../dist')));

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, './views'));

// Essential Middlewares
app.use(bodyParser.json());

// Initialize the Database
initDB('sample');

// Routes
app.use('/', require('./routes/navigation'));
app.use('/api/v1', require('./routes/api'));

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
