#!/usr/bin/env node

const path = require("path");
const fs = require("fs");
const program = require("commander");
const { version } = require("./../package.json");

// Current working directory
const currentDirectoryPath = process.cwd();

const templatePath = "my-app";

const filePath = path.join(currentDirectoryPath, templatePath);
program
  .version(version, "-v, --version")
  .command("create <type>") // sub-command name, appName = type, required
  .description("Make a project") // command description
  // function to execute when command is uses
  .action(function(appName) {
    console.log(appName, "Project Name");
  });

// allow commander to parse `process.argv`
program.parse(process.argv);

// console.log(program);
// console.log(path.join(__dirname, '/node-react-app'));
