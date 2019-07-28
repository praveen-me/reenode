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

// Check if the file Object is file or a directory
const isFile = file => {
  return file.isFile();
};

// Need to make recursive function that take a source and copy everything recursively

const copyRecursively = (from, to) => {
  // Make the destination directory
  fs.mkdir(to, err => {
    // Read file form the source folder
    const files = fs.readdirSync(from, { withFileTypes: true });

    // Loop through the file and checking if type is file then just copy else repeat copyRecursively
    files.forEach(file => {
      // Check file is file or directory
      if (isFile(file)) {
        // Copy file in a sync way
        fs.copyFileSync(`${from}/${file.name}`, `${to}/${file.name}`);
      } else {
        // Else create directory and repeat the procedure
        // fs.mkdir(`${to}/${file.name}`, err => {
        //   const newDirLink = `${from}/${file.name}`;
        //   const newTargetDirectoryLink = `${to}/${file.name}`;
        //   const filesInsideFolder = fs.readdirSync(newDirLink, {
        //     withFileTypes: true
        //   });
        //   filesInsideFolder.forEach(file =>
        //     fs.copyFileSync(
        //       `${newDirLink}/${file.name}`,
        //       `${newTargetDirectoryLink}/${file.name}`
        //     )
        //   );
        // });

        copyRecursively(`${from}/${file.name}`, `${to}/${file.name}`);
      }
    });
  });
};

const createTemplate = appName => {
  const currentDirectoryPath = process.cwd() + `/${appName}`;
  // 1 Make directory on the current path
  copyRecursively(reactTemplatePath, currentDirectoryPath);
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
