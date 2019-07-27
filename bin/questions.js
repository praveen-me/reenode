// const questions = [
//   {
//     type: "confirm",
//     name: "toBeDelivered",
//     message: "Is this for delivery?",
//     default: false
//   },
//   {
//     type: "input",
//     name: "phone",
//     message: "What's your phone number?",
//     validate: function(value) {
//       var pass = value.match(
//         /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i
//       );
//       if (pass) {
//         return true;
//       }

//       return "Please enter a valid phone number";
//     }
//   },
//   {
//     type: "list",
//     name: "size",
//     message: "What size do you need?",
//     choices: ["Large", "Medium", "Small"],
//     filter: function(val) {
//       return val.toLowerCase();
//     }
//   },
//   {
//     type: "input",
//     name: "quantity",
//     message: "How many do you need?",
//     validate: function(value) {
//       var valid = !isNaN(parseFloat(value));
//       return valid || "Please enter a number";
//     },
//     filter: Number
//   },
//   {
//     type: "expand",
//     name: "toppings",
//     message: "What about the toppings?",
//     choices: [
//       {
//         key: "p",
//         name: "Pepperoni and cheese",
//         value: "PepperoniCheese"
//       },
//       {
//         key: "a",
//         name: "All dressed",
//         value: "alldressed"
//       },
//       {
//         key: "w",
//         name: "Hawaiian",
//         value: "hawaiian"
//       }
//     ]
//   },
//   {
//     type: "rawlist",
//     name: "beverage",
//     message: "You also get a free 2L beverage",
//     choices: ["Pepsi", "7up", "Coke"]
//   },
//   {
//     type: "input",
//     name: "comments",
//     message: "Any comments on your purchase experience?",
//     default: "Nope, all good!"
//   },
//   {
//     type: "list",
//     name: "prize",
//     message: "For leaving a comment, you get a freebie",
//     choices: ["cake", "fries"],
//     when: function(answers) {
//       return answers.comments !== "Nope, all good!";
//     }
//   }
// ];

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
  },
  {
    type: "confirm",
    name: "isEslintConfig",
    message: "Include Eslint ?",
    default: "n"
  }
];

module.exports = questions;
