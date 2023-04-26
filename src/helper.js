const fs = require("fs");
class Helper {
  createIndex(teamMemberList) {
    var allMembers = "";
    teamMemberList.forEach((member) => {
      var icon = member.getRole();
      var addedInfo = "";
      if (icon == "Manager") {
        addedInfo = `<p>OfficeNumber: ${member.getOfficeNumber()}</p>`;
      }
      if (icon == "Intern") {
        addedInfo = `<p>School: ${member.getSchool()}</p>`;
      }
      if (icon == "Engineer") {
        addedInfo = `<p>Github: <a href="https://github.com/${member.getGithub()}">${member.getGithub()}</a></p>`;
      }
      var teamMember = `
              <div class="profile">
                      <div class="profileHeader">
                      <h2>${member.getName()}</h2>
                      <div class="position">
                          <img class="icon" src="./assets/icons/${icon}.png" alt="">
                          <h3>${icon}</h3>
                      </div>
                      </div>
                      <div class="profileBody">
                          <p>ID: ${member.getId()}</p>
                          <p>Email: <a href="mailto:${member.getEmail()}">${member.getEmail()}</a></p>
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

    fs.writeFile("./dist/index.html", htmlString, (err) => {
      if (err) {
        console.log(err);
      }
    });
  }
}

module.exports = Helper;
