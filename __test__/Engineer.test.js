const Engineer = require("../lib/Engineer.js");
describe("engineer", () => {
    describe("init", () => {
      it("should return an object containing a 'email', 'name', 'id' ,'github' property when called with the 'new' keyword", () => {
        var engineer = new Engineer();
        expect("email" in engineer).toEqual(true);
        expect("name" in engineer).toEqual(true);
        expect("id" in engineer).toEqual(true);
        expect("gitHub" in engineer).toEqual(true);
        
      });
    });
    describe("getGitgub()", () => {
        it("should return engineer`s github", () => {
          var name = "Engineer";
          var id = "1";
          var email = "engineer@gmail.com";
          var github ="AleksandrBausher"
          var obj = new Engineer(name, id, email,github);
          var result = obj.getGithub();
          expect(result).toEqual(github);
        });
        })
        describe("getRole()", () => {
            it("should return engineer`s role", () => {
              var name = "Engineer";
              var id = "2";
              var email = "engineer@gmail.com";
              var github = "githubUsername"
              var obj = new Engineer(name, id, email, github);
              var result = obj.getRole();
              expect(result).toEqual("Engineer");
            });
            })
});
