#!/usr/bin/env node

const path = require("path");
const fs = require("fs");
const program = require("commander");
const inquirer = require("inquirer");
const { version } = require("./../package.json");
const questions = require("./questions");

console.log("Welcome to renode.🚀");

inquirer.prompt(questions).then(answers => {
  console.log("\nOrder receipt:");
  console.log(JSON.stringify(answers, null, "  "));
});

// Current working directory
const currentDirectoryPath = process.cwd();

const templatePath = "my-app";

const filePath = path.join(currentDirectoryPath, templatePath);

program
  .version(version, "-v, --version")
  .command("create <type>") // sub-command name, appName = type, required
  .description("Make a project") // command description
  // function to execute when command is uses
  .action(function(appName) {});

// allow commander to parse `process.argv`
program.parse(process.argv);
