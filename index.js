const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer.js");
const Manager = require("./lib/Manager.js");
const Intern = require("./lib/Intern.js");

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
  var manager = new Manager();
  manager.id = managerData.id;
  manager.name = managerData.name;
  manager.email = managerData.email;
  manager.officeNumber = managerData.officeNumber;

  teamMemberList.push(manager);

  while (true) {
    var mainSelection = await inquirer.prompt(QuestionsMainMenu);
    if (mainSelection.selection == options[0]) {
      var engineerData = await inquirer.prompt(QuestionsEngineer);
      var engineer = new Engineer();
      engineer.id = engineerData.id;
      engineer.name = engineerData.name;
      engineer.email = engineerData.email;
      engineer.gitHub = engineerData.github;
      teamMemberList.push(engineer);
    } else if (mainSelection.selection == options[1]) {
      var internData = await inquirer.prompt(QuestionsIntern);
      var intern = new Intern();
      intern.id = internData.id;
      intern.email = internData.email;
      intern.name = internData.name;
      intern.school = intern.school;
      teamMemberList.push(intern);
    } else {
      createIndex(teamMemberList);
      console.log("Team Build Finished");
      return;
    }
  }
}

function createIndex(teamMemberList) {
  allMembers = "";
  teamMemberList.forEach((member) => {
    var icon = !member.officeNumber
      ? !member.gitHub
        ? "Intern"
        : "Engineer"
      : "Manager";
    var addedInfo = "";
    if (icon == "Manager") {
      addedInfo = `<p>OfficeNumber: ${member.officeNumber}</p>`;
    }
    if (icon == "Intern") {
      addedInfo = `<p>School: ${member.school}</p>`;
    }
    if (icon == "Engineer") {
      addedInfo = `<p>Github: <a href="https://github.com/${member.gitHub}">${member.gitHub}</a></p>`;
    }
    var teamMember = `
        <div class="profile">
                <div class="profileHeader">
                <h2>${member.name}</h2>
                <div class="position">
                    <img class="icon" src="./assets/icons/${icon}.png" alt="">
                    <h3>${icon}</h3>
                </div>
                </div>
                <div class="profileBody">
                    <p>ID: ${member.id}</p>
                    <p>Email: <a href="mailto:${member.email}">${member.email}</a></p>
                    ${addedInfo}
                </div>
            </div>
        `;
    allMembers += teamMember;
  });

  var htmlString = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <header>My Team</header>
    <main>
    ${allMembers}
    </main>
</body>
</html>
    `;
}

init();