const express = require('express');
const path = require('path');
const ejs = require('ejs');

const PORT = process.env.PORT || 3001;
const app = express();

app.use('/', express.static(path.join(__dirname, './../dist')));

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, './views'));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
