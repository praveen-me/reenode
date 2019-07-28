#!/usr/bin/env node

const path = require("path");
const fs = require("fs");
const program = require("commander");
const inquirer = require("inquirer");
const { version } = require("./../package.json");
const questions = require("./questions");

// TODO:
// Steps to follow
// 1 - Create templates folder and inside that create a simple template
// 2 - Take all the files of the template and try to copy them in to specified directory at a specified location

// Now, I have my first take the template folder location

// Now, I need to copy all the files from templates folder to the specified folder in a particular library

// Current working directory
const templatePath = path.join(__dirname, `../templates`);
const reactTemplatePath = templatePath + "/react_+_node";

const isFile = file => {
  return file.isFile();
};

const createTemplate = appName => {
  const currentDirectoryPath = process.cwd() + `/${appName}`;

  // 1 Make directory on the current path
  // fs.mkdir(currentDirectoryPath, err => {
  // 2 - Read the targeted directory
  const files = fs.readdirSync(reactTemplatePath, { withFileTypes: true });
  files.forEach(file => {
    // 3 - Copy each file to new directory
    // fs.copyFileSync(
    // reactTemplatePath + `/${file}`,
    //   currentDirectoryPath + `/${file}`
    // );
    // console.log(file["[Symbol(type)]"]);

    // console.log(file.isDirectory());
    // console.log(reactTemplatePath + `/${file}`);
    console.log(isFile(file));
  });
  // });
  // 3 Take all files from template and path in that particular directory
};

const init = appName => {
  console.log("Welcome to renode.🚀");

  inquirer.prompt(questions).then(answers => {
    console.log("\nOrder receipt:");
    console.log(JSON.stringify(answers, null, "  "));
    createTemplate(appName);
  });
};

program
  .version(version, "-v, --version")
  .command("create <type>") // sub-command name, appName = type, required
  .description("Make a project") // command description
  // function to execute when command is uses
  .action(init);

// allow commander to parse `process.argv`
program.parse(process.argv);
