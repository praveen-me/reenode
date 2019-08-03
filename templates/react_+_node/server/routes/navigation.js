const express = require('express');

const router = express.Router();

const mode = process.env.NODE_ENV;

// TODO:
// Feel free to edit this file
router.get('*', (req, res) => res.render('index', { mode }));

module.exports = router;
