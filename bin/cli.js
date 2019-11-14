#!/usr/bin/env node

const path = require("path");
const fs = require("fs");
const program = require("commander");
const inquirer = require("inquirer");
const ejs = require("ejs");
const { version } = require("./../package.json");
const questions = require("./questions");
const templates = require("./template-names");
const chalk = require("chalk");
const exec = require("child_process").execSync;
let error = false;
let reflections = {};

const emojiCollection = [
  "😁",
  "🔥",
  "🏗",
  "😤",
  "🐞",
  "☠️",
  "💀",
  "🐳",
  "🍗",
  "✈️"
];

/**
 * Takes directory name and returns a new template path
 * 
 * @param {String} directoryName Name of the directory
 * 
 * @returns {String} New Template Path Name
 */
const changeTemplatePath = (directoryName = 'ern') => {
  return path.join(__dirname, `../template/${directoryName}`);
}

// Current working directory
let templatePath = changeTemplatePath()

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

const fileCreationMsg = fileName => {
  console.log(
    `Created ${fileName} ${
      emojiCollection[Math.ceil(Math.random() * emojiCollection.length - 1)]
    }`
  );
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
  try {
    fs.mkdirSync(to);
  } catch (e) {
    if (e.code === "EEXIST") {
      error = true;
      console.log(chalk.red.bold("\nDirectory already present. ❌ \n"));
    }
    return;
  }

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
        const mainFileName = file.name.slice(0, file.name.length - 4);

        if (file.name === "index.ejs.ejs") {
          fs.copyFileSync(newFrom, `${to}/${mainFileName}`);
          fileCreationMsg(
            (to + "/" + mainFileName).replace(
              new RegExp(process.cwd(), "g"),
              ""
            )
          );
        } else {
          const content = parseEjs(newFrom);
          fs.writeFileSync(`${to}/${mainFileName}`, content);
        }
        fileCreationMsg(
          (to + "/" + mainFileName).replace(new RegExp(process.cwd(), "g"), "")
        );

        return;
      } else {
        if (file.name === "package-lock.json") return;

        fs.copyFileSync(newFrom, newTo);
        fileCreationMsg(newTo.replace(new RegExp(process.cwd(), "g"), ""));
      }
    } else {
      const { boilerplate } = reflections;
      const templateIndex = templates.indexOf(boilerplate);
      
      // If some how node_modules and dist directory are left there
      if (file.name === "node_modules" || file.name === "dist") return;

      if (
        ((templateIndex === 0 ||
          templateIndex === 1) &&
          file.name === "store") ||
        (templateIndex === 0 && file.name === "components") ||
        (templateIndex !== 3 && file.name === "controllers") ||
        (templateIndex !== 3 && file.name === "db") ||
        (templateIndex !== 3 && file.name === "models") ||
        (templateIndex !== 3 && file.name === "routes")
      )
        return;

      // Repeat the procedure again
      copyRecursively(newFrom, newTo);
    }
  });
};

/**
 * Generates the Welcome message
 *
 * @param {string} appName string Name
 *
 * @return {void}
 */
const welcomeMsg = (appName, pkgManager) => {
  console.log(
    `${chalk.bold("Boilerplate generated. \nRun ")} ${chalk.bold.cyan(
      `cd ${appName} && ${pkgManager === "yarn" ? "yarn" : "npm run"} dev`
    )} ${chalk.bold(`for starting dev server. \nLet's start building 🏗.`)}`
  );
  console.log(
    chalk
      .hex("#fdf39f")
      .bold("\n🕸  With Great Power Comes Great Devonsibility 🚀\n")
  );
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
  console.log(
    chalk.bold.magenta(
      `\n---------------------------------------------------\n
               Generating Boilerplate
    \n--------------------------------------------------- \n`
    )
  );

  const templateIndex = templates.indexOf(reflections.boilerplate);

  if (templateIndex >= 3 ) {
    console.log("Now it's time to broke 😈");
    return;
  }

  try {
    copyRecursively(templatePath, currentDirectoryPath);
  } catch (e){
    console.log(chalk.bold.red("Please make sure you are running on Node version: 10 or 10 +"));
    fs.rmdirSync(currentDirectoryPath);
    process.exit(1);
  }
};

/**
 * Initialize function for boilerplate creation
 *
 * @param {string} appName Name of the project
 *
 * @return {void}
 */
const init = async appName => {
  console.log("Welcome to Reenode.🚀");

  const answers = await inquirer.prompt(questions);

  reflections = {
    ...answers,
    appName
  };

  createTemplate(appName);

  if (!error) {
    console.log(chalk.bold(`\nWait untill node_modules install...\n`));

    try {
      exec(`cd ${process.cwd()}/${appName} && ${reflections.pkgManager} install && npm run prettier:server && npm run prettier:client && git init && cd ..`);

      welcomeMsg(appName, reflections.pkgManager)
    } catch (err) {
      if (err) {
        console.log(chalk.red(`\n🐞 ${err} \n`));
      }
    }
  }
};

program.on("--help", () => {
  console.log(
    chalk
      .hex("#fdf39f")
      .bold("\n🕸  With Great Power Comes Great Devosibility 🕷 \n")
  );
});

program
  .version(version, "-v, --version")
  .command("create <project-name>") // sub-command name, appName = type, required
  .description("Make a project") // command description
  // function to execute when command is uses
  .action(init);

// error on unknown commands
program.on('command:*', function () {
  console.error('Invalid command: %s\nSee --help for a list of available commands.', program.args.join(' '));
  process.exit(1);
});

// allow commander to parse `process.argv`
program.parse(process.argv);
