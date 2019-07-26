#!/usr/bin/env node

const path = require('path');
const fs = require("fs");

// Current working directory
const currentDirectoryPath = process.cwd();

const templatePath = 'my-app';

const filePath = path.join(currentDirectoryPath, templatePath);
console.log(process.cwd());

fs.mkdir(filePath, (err) => {
	if (err && err.errno) {
		console.log("Folder Already Exists. 🏬");

		// This is how we can remove a folder.
		// fs.mkdirSync(currentDirectoryPath);
	}
});
// console.log(path.join(__dirname, '/node-react-app'));
