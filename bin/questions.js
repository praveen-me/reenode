const questions = [
  {
    type: "rawlist",
    name: "boilerplate",
    message: "Please choose your boilerplate 🏗:",
    choices: [
      "React + Node",
      "React + React Router + Node",
      "React + Redux + React Router + Node",
      "React + Redux + React Router + Node + MongoDB",
      "React + Redux + React Router + WordPress"
    ]
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
