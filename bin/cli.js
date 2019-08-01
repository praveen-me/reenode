#!/usr/bin/env node

const path = require("path");
const fs = require("fs");
const program = require("commander");
const inquirer = require("inquirer");
const ejs = require("ejs");
const { version } = require("./../package.json");
const questions = require("./questions");
const templates = require("./template-names");

let reflections = {};

// Current working directory
const templatePath = path.join(__dirname, `../templates`);
const reactTemplatePath = templatePath + "/react_+_node";

/**
 * Check if the particular file is actual file or a folder
 *
 * @param {Object} file File Object
 *
 * @return {boolean} TRUE: If file else FALSE
 */
const isFile = file => {
  return file.isFile();
};

const parseEjs = (filePath, data) => {
  const fileContent = fs.readFileSync(filePath).toString();
  return ejs.render(fileContent, reflections);
};

/**
 * Copy files recursively from the source to destination
 *
 * @param {string} from Source from where copy starts
 * @param {string} to Destination where to copy
 *
 * @return {void}
 */
const copyRecursively = (from, to) => {
  // Make the destination directory
  fs.mkdir(to, err => {
    // Read file form the source folder
    const files = fs.readdirSync(from, { withFileTypes: true });

    // Loop through the file and checking if type is file then just copy else repeat copyRecursively
    files.forEach(file => {
      const newFrom = `${from}/${file.name}`;
      const newTo = `${to}/${file.name}`;

      // Check file is file or directory
      if (isFile(file)) {
        // Copy file in a sync way
        // Check if the file is ejs then need parse template out of it
        if (path.extname(file.name) === ".ejs") {
          const content = parseEjs(newFrom);
          const mainFileName = file.name.slice(0, file.name.length - 4);
          fs.writeFileSync(`${to}/${mainFileName}`, content);
        } else {
          fs.copyFileSync(newFrom, newTo);
        }
      } else {
        const { boilerplate } = reflections;
        // If some how node_modules and dist directory are left there
        if (file.name === "node_modules" || file.name === "dist") return;

        if (
          ((templates.indexOf(boilerplate) === 0 ||
            templates.indexOf(boilerplate) === 1) &&
            file.name === "store") ||
          (templates.indexOf(boilerplate) === 0 && file.name === "components")
        )
          return;

        // Repeat the procedure again
        copyRecursively(newFrom, newTo);
      }
    });
  });
};

/**
 * Creates the project
 *
 * @param {string} appName Name of the project
 *
 * @return {void}
 */
const createTemplate = appName => {
  const currentDirectoryPath = process.cwd() + `/${appName}`;
  // 1 Make directory on the current path
  copyRecursively(reactTemplatePath, currentDirectoryPath);
};

/**
 * Initialize function for boilerplate creation
 *
 * @param {string} appName Name of the project
 *
 * @return {void}
 */
const init = appName => {
  console.log("Welcome to renode.🚀");

  inquirer.prompt(questions).then(answers => {
    reflections = {
      ...answers,
      appName
    };

    // console.log(reflections, "reflections");
    createTemplate(appName);
    // console.log(templates.indexOf(reflections.boilerplate));
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
