#!/usr/bin/env node

const path = require("path");
const fs = require("fs");
const program = require("commander");
const { version } = require("./../package.json");

// Current working directory
const currentDirectoryPath = process.cwd();

const templatePath = "my-app";

const filePath = path.join(currentDirectoryPath, templatePath);
// console.log(process.cwd());

program.version(version, "-v, --version").parse(process.argv);

// console.log(program);
// console.log(path.join(__dirname, '/node-react-app'));
