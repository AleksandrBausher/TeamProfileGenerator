const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer.js");
const Manager = require("./lib/Manager.js");
const Intern = require("./lib/Intern.js");
const Helper = require("./src/helper.js");

const options = ["1. Add Engineer.", "2. Add Intern.", "3. Finish."];

const QuestionsMainMenu = [
  {
    type: "list",
    name: "selection",
    message: "Would you like to add another team member?",
    choices: options,
  },
];

const QuestionsEngineer = [
  {
    type: "input",
    name: "name",
    message: "Please write the NAME of the Engineer",
  },
  { type: "input", name: "id", message: "Please write the ID of the Engineer" },
  {
    type: "input",
    name: "email",
    message: "Please write the EMAIL of the Engineer",
  },
  {
    type: "input",
    name: "github",
    message: "Please write the GITHUB USERNAME of the Engineer",
  },
];

const QuestionsIntern = [
  {
    type: "input",
    name: "name",
    message: "Please write the NAME of the Intern",
  },
  { type: "input", name: "id", message: "Please write the ID of the Intern" },
  {
    type: "input",
    name: "email",
    message: "Please write the EMAIL of the Intern",
  },
  {
    type: "input",
    name: "school",
    message: "Please write the SCHOOL of the Intern",
  },
];

const QuestionsManager = [
  {
    type: "input",
    name: "name",
    message: "Please write the NAME of the Manager",
  },
  { type: "input", name: "id", message: "Please write the ID of the Manager" },
  {
    type: "input",
    name: "email",
    message: "Please write the EMAIL of the Manager",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "Please write the OFFICE NUMBER of the Manager",
  },
];

async function init() {
  var teamMemberList = [];
  var managerData = await inquirer.prompt(QuestionsManager);
  var manager = new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNumber);

  teamMemberList.push(manager);

  while (true) {
    var mainSelection = await inquirer.prompt(QuestionsMainMenu);
    if (mainSelection.selection == options[0]) {
      var engineerData = await inquirer.prompt(QuestionsEngineer);
      var engineer = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github);

      teamMemberList.push(engineer);

    } else if (mainSelection.selection == options[1]) {
      var internData = await inquirer.prompt(QuestionsIntern);
      var intern = new Intern( internData.name, internData.id, internData.email, internData.school);

      teamMemberList.push(intern);

    } else {
      var helper = new Helper()
      helper.createIndex(teamMemberList);
      console.log("Team Build Finished");
      return;
    }
  }
}

init();