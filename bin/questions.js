const templates = require("./template-names");

const questions = [
  {
    type: "rawlist",
    name: "boilerplate",
    message: "Please choose your boilerplate 🏗:",
    choices: [...templates]
  },
  {
    type: "input",
    name: "description",
    message: "Project Description:",
    default: "Nope! I'll add later."
  },
  {
    type: "input",
    name: "author",
    message: "Author Name:",
    default: "Nope! I'll add later."
  }
];

module.exports = questions;
